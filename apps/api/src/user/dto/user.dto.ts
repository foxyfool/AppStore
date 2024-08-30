import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsNumber,
  IsDate,
} from 'class-validator'
import { Expose, Transform } from 'class-transformer'
import { UserRole, AuthProvider } from '@prisma/client'

export class UserDto {
  @IsString()
  @Expose()
  id: string

  @IsEmail()
  @Expose()
  email: string

  @IsString()
  @IsOptional()
  @Expose()
  image?: string

  @IsString()
  @Expose()
  firstName: string

  @IsString()
  @Expose()
  lastName: string

  @IsString()
  @Expose()
  phoneNumber: string

  @IsNumber()
  @Expose()
  inStoreCredits: number

  @IsEnum(UserRole)
  @Expose()
  role: UserRole

  @IsEnum(AuthProvider)
  @IsOptional()
  @Expose()
  authProvider?: AuthProvider

  @IsString()
  @IsOptional()
  @Expose()
  authProviderId?: string

  @IsDate()
  @Expose()
  @Transform(({ value }) => new Date(value))
  createdAt: Date

  @IsDate()
  @Expose()
  @Transform(({ value }) => new Date(value))
  updatedAt: Date
}
