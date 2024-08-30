import { Module } from '@nestjs/common'
import { ShippingDetailsController } from './shipping-details.controller'
import { ShippingDetailsService } from './shipping-details.service'

@Module({
  controllers: [ShippingDetailsController],
  providers: [ShippingDetailsService],
})
export class ShippingDetailsModule {}
