import { IsString, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'

export class CartItemDto {
  @IsString()
  @Expose()
  uid: string

  @IsNumber()
  @Expose()
  quantity: number

  @IsString()
  @Expose()
  cartUid: string

  @IsString()
  @Expose()
  productUid: string
}
