import { Controller, Post, Body } from '@nestjs/common';
import { TradingService } from './trading.service';
import { PlaceOrderDto } from '../_common/dtos/place-order.dto';
import { ResponseTransformerService } from '../_core/services/response-transformer.service';

@Controller('trading')
export class TradingController {
  constructor(
    private readonly tradingService: TradingService,
    private readonly responseTransformer: ResponseTransformerService,
  ) {}

  @Post('place-order')
  async placeOrder(@Body() order: PlaceOrderDto): Promise<any> {
    try {
      const result = await this.tradingService.placeOrder(order, order.broker);
      return this.responseTransformer.transformSuccessResponse(result);
    } catch (error) {
      return this.responseTransformer.transformErrorResponse(error);
    }
  }
}
