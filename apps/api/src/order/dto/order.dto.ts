import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsDateString,
} from 'class-validator'
import { Expose } from 'class-transformer'
import { OrderStatus } from '@prisma/client'

export class OrderDto {
  @IsString()
  @Expose()
  uid: string

  @IsNumber()
  @Expose()
  subtotal: number

  @IsNumber()
  @IsOptional()
  @Expose()
  discount?: number

  @IsNumber()
  @Expose()
  total: number

  @IsString()
  @IsOptional()
  @Expose()
  couponCode?: string

  @IsEnum(OrderStatus)
  @Expose()
  status: OrderStatus

  @IsDateString()
  @IsOptional()
  @Expose()
  cancelledAt?: Date

  @IsDateString()
  @IsOptional()
  @Expose()
  shippedAt?: Date

  @IsString()
  @Expose()
  userUid: string

  @IsString()
  @IsOptional()
  @Expose()
  shippingAddressUid?: string

  @IsString()
  @IsOptional()
  @Expose()
  shippingDetailsUid?: string

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
