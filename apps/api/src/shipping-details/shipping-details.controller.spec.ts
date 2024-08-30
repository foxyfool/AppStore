import { Test, TestingModule } from '@nestjs/testing'
import { ShippingDetailsController } from './shipping-details.controller'

describe('ShippingDetailsController', () => {
  let controller: ShippingDetailsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingDetailsController],
    }).compile()

    controller = module.get<ShippingDetailsController>(
      ShippingDetailsController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
