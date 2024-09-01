import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// import { UserModule } from './user/user.module'
import { AddressModule } from './address/address.module'
import { OrderModule } from './order/order.module'
import { InvoiceModule } from './invoice/invoice.module'
import { InvoiceItemModule } from './invoice-item/invoice-item.module'
import { ShippingDetailsModule } from './shipping-details/shipping-details.module'
import { OrderItemModule } from './order-item/order-item.module'
import { ProductModule } from './product/product.module'
import { CategoryModule } from './category/category.module'
import { PaymentModule } from './payment/payment.module'
import { CartModule } from './cart/cart.module'
import { CartItemModule } from './cart-item/cart-item.module'
import { ReviewModule } from './review/review.module'
import { ImageModule } from './image/image.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    // UserModule,
    AddressModule,
    OrderModule,
    InvoiceModule,
    InvoiceItemModule,
    ShippingDetailsModule,
    OrderItemModule,
    ProductModule,
    CategoryModule,
    PaymentModule,
    CartModule,
    CartItemModule,
    ReviewModule,
    ImageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
