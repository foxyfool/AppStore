import {
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
  IsEnum,
} from 'class-validator'
import { Expose } from 'class-transformer'
import { InvoiceStatus } from '@prisma/client'

export class InvoiceDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  invoiceNumber: string

  @IsDateString()
  @Expose()
  issuedDate: Date

  @IsDateString()
  @Expose()
  dueDate: Date

  @IsNumber()
  @Expose()
  totalAmount: number

  @IsNumber()
  @Expose()
  subtotal: number

  @IsNumber()
  @Expose()
  taxAmount: number

  @IsNumber()
  @Expose()
  discountAmount: number

  @IsEnum(InvoiceStatus)
  @Expose()
  status: InvoiceStatus

  @IsString()
  @IsOptional()
  @Expose()
  notes?: string

  @IsString()
  @IsOptional()
  @Expose()
  termsAndConditions?: string

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
