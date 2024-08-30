import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

export class ShippingDetailsDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  courierPartner: string

  @IsString()
  @Expose()
  paymentMethod: string

  @IsString()
  @IsOptional()
  @Expose()
  trackingNumber?: string

  @IsDateString()
  @IsOptional()
  @Expose()
  estimatedDelivery?: Date

  @IsNumber()
  @Expose()
  shippingCost: number

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
