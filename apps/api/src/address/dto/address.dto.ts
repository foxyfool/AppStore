import { IsString, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

export class AddressDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  addressLine1: string

  @IsString()
  @IsOptional()
  @Expose()
  addressLine2?: string

  @IsString()
  @Expose()
  city: string

  @IsString()
  @Expose()
  state: string

  @IsString()
  @Expose()
  zip: string

  @IsString()
  @Expose()
  country: string

  @IsString()
  @Expose()
  userUid: string
}
