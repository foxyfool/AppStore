import { IsString, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

export class ImageDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  url: string

  @IsString()
  @IsOptional()
  @Expose()
  alt?: string

  @IsString()
  @Expose()
  productUid: string
}
