import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

export class InvoiceItemDto {
  @IsString()
  @Expose()
  uid: string

  @IsString()
  @Expose()
  description: string

  @IsNumber()
  @Expose()
  quantity: number

  @IsNumber()
  @Expose()
  unitPrice: number

  @IsNumber()
  @Expose()
  totalPrice: number

  @IsNumber()
  @Expose()
  discountAmount: number

  @IsNumber()
  @Expose()
  taxRate: number

  @IsNumber()
  @Expose()
  taxAmount: number

  @IsString()
  @IsOptional()
  @Expose()
  sku?: string

  @IsString()
  @IsOptional()
  @Expose()
  serialNumber?: string

  @IsString()
  @IsOptional()
  @Expose()
  imei?: string

  @IsString()
  @Expose()
  invoiceUid: string

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
