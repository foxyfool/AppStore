import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { PrismaService } from '../prisma/prisma.service'
import { UserDto, UpdateUserDto } from './dto/user.dto'
import { UserRole } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.uid }
    return {
      access_token: this.jwtService.sign(payload),
      user,
    }
  }

  async signup(
    userSignupDto: UserDto,
  ): Promise<{ access_token: string; user: Omit<UserDto, 'password'> }> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: userSignupDto.email },
      })

      if (existingUser) {
        throw new ConflictException('A user with this email already exists')
      }

      const hashedPassword = await bcrypt.hash(userSignupDto.password, 10)

      const newUser = await this.prisma.user.create({
        data: {
          ...userSignupDto,
          password: hashedPassword,
          role: userSignupDto.role || UserRole.CUSTOMER,
          inStoreCredits: 0,
        },
      })

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = newUser
      const payload = { email: newUser.email, sub: newUser.uid }
      return {
        access_token: this.jwtService.sign(payload),
        user: userWithoutPassword,
      }
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error
      }
      throw new InternalServerErrorException('An error occurred during signup')
    }
  }

  async getUserById(uid: string): Promise<Omit<UserDto, 'password'>> {
    if (!uid) {
      throw new BadRequestException('UID is required')
    }

    const user = await this.prisma.user.findUnique({
      where: { uid },
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }

  async updateUser(
    uid: string,
    updateUserDto: UpdateUserDto,
  ): Promise<{ message: string; user: Omit<UserDto, 'password'> }> {
    try {
      if (!uid) {
        throw new BadRequestException('User ID is required')
      }

      const existingUser = await this.prisma.user.findUnique({
        where: { uid },
      })

      if (!existingUser) {
        throw new NotFoundException('User not found')
      }

      let isPasswordUpdated = false
      let isOtherFieldsUpdated = false

      // Email uniqueness check
      if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
        const emailExists = await this.prisma.user.findUnique({
          where: { email: updateUserDto.email },
        })
        if (emailExists) {
          throw new ConflictException('Email already in use')
        }
        isOtherFieldsUpdated = true
      }

      // Password update check
      if (updateUserDto.password) {
        if (!updateUserDto.oldPassword) {
          throw new BadRequestException(
            'Old password is required to update password',
          )
        }
        const oldPasswordValid = await bcrypt.compare(
          updateUserDto.oldPassword,
          existingUser.password,
        )
        if (!oldPasswordValid) {
          throw new UnauthorizedException('Invalid old password')
        }
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
        isPasswordUpdated = true
      }

      // Check for other field updates
      if (
        updateUserDto.firstName ||
        updateUserDto.lastName ||
        updateUserDto.phoneNumber ||
        updateUserDto.image
      ) {
        isOtherFieldsUpdated = true
      }
      // Perform the update
      const updatedUser = await this.prisma.user.update({
        where: { uid },
        data: {
          email: updateUserDto.email,
          password: updateUserDto.password,
          firstName: updateUserDto.firstName,
          lastName: updateUserDto.lastName,
          phoneNumber: updateUserDto.phoneNumber,
          image: updateUserDto.image,
        },
      })

      // Prepare the success message
      let message = ''
      if (isPasswordUpdated && isOtherFieldsUpdated) {
        message = 'Updated user details and password successfully'
      } else if (isPasswordUpdated) {
        message = 'Password updated successfully'
      } else if (isOtherFieldsUpdated) {
        message = 'Updated user details successfully'
      } else {
        message = 'No changes were made'
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = updatedUser
      return { message, user: userWithoutPassword }
    } catch (error) {
      console.error('Error in updateUser service method:', error)
      throw error
    }
  }

  async deleteUser(uid: string): Promise<void> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { uid },
      })

      if (!user) {
        throw new NotFoundException('User not found')
      }

      await this.prisma.user.delete({
        where: { uid },
      })
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new InternalServerErrorException(
        'An error occurred while deleting the user',
      )
    }
  }

  async changePassword(uid: string, oldPassword: string, newPassword: string) {
    // Fetch the user by UID
    const user = await this.prisma.user.findUnique({ where: { uid } })
    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    // Validate the old password
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid old password')
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10)

    // Update the user's password
    await this.prisma.user.update({
      where: { uid },
      data: { password: hashedNewPassword },
    })

    return { message: 'Password changed successfully' }
  }

  async refreshToken(user: any) {
    const payload = { email: user.email, sub: user.uid }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
