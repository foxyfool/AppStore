import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

export class ProductDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  name: string

  @IsString()
  @Expose()
  description: string

  @IsNumber()
  @Expose()
  price: number

  @IsNumber()
  @Expose()
  stock: number

  @IsString()
  @Expose()
  brand: string

  @IsString()
  @Expose()
  model: string

  @IsString()
  @Expose()
  color: string

  @IsNumber()
  @Expose()
  storage: number

  @IsNumber()
  @Expose()
  warranty: number

  @IsString()
  @Expose()
  display: string

  @IsString()
  @Expose()
  processor: string

  @IsString()
  @Expose()
  rearCamera: string

  @IsString()
  @Expose()
  frontCamera: string

  @IsString()
  @Expose()
  condition: string

  @IsString()
  @IsOptional()
  @Expose()
  videoUrl?: string

  @IsString()
  @Expose()
  imei: string

  @IsString()
  @Expose()
  categoryUid: string

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
