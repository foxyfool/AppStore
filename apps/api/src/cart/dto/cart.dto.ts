import { IsString, IsDateString } from 'class-validator'
import { Expose } from 'class-transformer'

export class CartDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  userUid: string

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
