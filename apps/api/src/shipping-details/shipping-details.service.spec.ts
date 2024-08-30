import { Test, TestingModule } from '@nestjs/testing'
import { ShippingDetailsService } from './shipping-details.service'

describe('ShippingDetailsService', () => {
  let service: ShippingDetailsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingDetailsService],
    }).compile()

    service = module.get<ShippingDetailsService>(ShippingDetailsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
