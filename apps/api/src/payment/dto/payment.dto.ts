import {
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
  IsEnum,
} from 'class-validator'
import { Expose } from 'class-transformer'
import { PaymentStatus } from '@prisma/client'

export class PaymentDto {
  @IsString()
  @Expose()
  uid: string

  @IsNumber()
  @Expose()
  amount: number

  @IsString()
  @Expose()
  method: string

  @IsEnum(PaymentStatus)
  @Expose()
  status: PaymentStatus

  @IsString()
  @IsOptional()
  @Expose()
  transactionId?: string

  @IsString()
  @Expose()
  orderUid: string

  @IsDateString()
  @Expose()
  createdAt: Date

  @IsDateString()
  @Expose()
  updatedAt: Date
}
