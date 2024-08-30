import { IsString, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'

export class OrderItemDto {
  @IsString()
  @Expose()
  uid: string

  @IsNumber()
  @Expose()
  quantity: number

  @IsNumber()
  @Expose()
  price: number

  @IsString()
  @Expose()
  orderUid: string

  @IsString()
  @Expose()
  productUid: string
}
