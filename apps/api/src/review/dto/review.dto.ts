import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

export class ReviewDto {
  @IsString()
  @Expose()
  uid: string

  @IsNumber()
  @Expose()
  rating: number

  @IsString()
  @IsOptional()
  @Expose()
  comment?: string

  @IsString()
  @Expose()
  userUid: string

  @IsString()
  @Expose()
  productUid: string

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
