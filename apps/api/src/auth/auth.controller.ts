import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  UseGuards,
  Request,
  Param,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { UserDto, UpdateUserDto } from './dto/user.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() userSignupDto: UserDto) {
    return this.authService.signup(userSignupDto)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile/:uid')
  async getUser(@Param('uid') uid: string) {
    try {
      const user = await this.authService.getUserById(uid)
      if (user) {
        return {
          message: 'User successfully fetched',
          user,
        }
      } else {
        throw new NotFoundException('User not found')
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      throw new HttpException(
        'An error occurred while fetching user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('update/:uid')
  async updateUser(
    @Param('uid') uid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.authService.updateUser(uid, updateUserDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:uid')
  async deleteUser(@Param('uid') uid: string) {
    await this.authService.deleteUser(uid)
    return { message: 'User account deleted successfully' }
  }
  @UseGuards(JwtAuthGuard)
  @Put('change-password/:uid')
  async changePassword(
    @Param('uid') uid: string,
    @Body() body: { oldPassword: string; newPassword: string },
  ) {
    return this.authService.changePassword(
      uid, // Use the extracted uid
      body.oldPassword,
      body.newPassword,
    )
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user)
  }
}
