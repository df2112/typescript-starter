import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TradingService } from './trading.service';
import { PlaceOrderDto } from '../_common/dtos/place-order.dto';
import { ResponseTransformerService } from '../_core/services/response-transformer.service';
import { GetSessionTokenDto } from '@/_common/dtos/get-session-token.dto';
import { LogMethod } from '@/_common/decorators/LogMethod';

@Controller('trading')
export class TradingController {
  constructor(
    private readonly tradingService: TradingService,
    private readonly responseTransformer: ResponseTransformerService,
  ) {}

  @Get('session-token')
  @LogMethod()
  async getSessionToken(@Query() dto: GetSessionTokenDto): Promise<any> {
    try {
      const sessionResponseStub =
        await this.tradingService.getSessionToken(dto);

      return sessionResponseStub;

      return this.responseTransformer.transformSuccessResponse(
        sessionResponseStub,
      );
    } catch (error) {
      return this.responseTransformer.transformErrorResponse(error);
    }
  }

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
