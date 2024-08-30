import { IsString, IsOptional, IsDateString } from 'class-validator'
import { Expose } from 'class-transformer'

export class CategoryDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  name: string

  @IsString()
  @IsOptional()
  @Expose()
  description?: string

  @IsString()
  @Expose()
  slug: string

  @IsString()
  @IsOptional()
  @Expose()
  parentUid?: string

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
