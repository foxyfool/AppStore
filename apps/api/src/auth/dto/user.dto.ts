import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'
import { UserRole, AuthProvider } from '@prisma/client'

export class UserDto {
  @IsOptional()
  uid: string

  @IsEmail()
  @Expose()
  email: string

  @IsString()
  @Expose()
  password: string

  @IsString()
  @Expose()
  firstName: string

  @IsString()
  @Expose()
  lastName: string

  @IsString()
  @Expose()
  phoneNumber: string

  @IsEnum(UserRole)
  @IsOptional()
  @Expose()
  role?: UserRole

  @IsEnum(AuthProvider)
  @IsOptional()
  @Expose()
  authProvider?: AuthProvider

  @IsString()
  @IsOptional()
  @Expose()
  authProviderId?: string
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string

  @IsString()
  @IsOptional()
  oldPassword?: string

  @IsString()
  @IsOptional()
  password?: string

  @IsString()
  @IsOptional()
  firstName?: string

  @IsString()
  @IsOptional()
  lastName?: string

  @IsString()
  @IsOptional()
  phoneNumber?: string

  @IsString()
  @IsOptional()
  image?: string
}
