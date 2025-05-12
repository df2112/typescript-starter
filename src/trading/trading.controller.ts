import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TradingService } from './trading.service';
import { PlaceOrderDto } from '../common/dtos/place-order.dto';
import { ResponseTransformerService } from '../core/services/response-transformer.service';
import { GetSessionTokenDto } from '@/common/dtos/get-session-token.dto';
import { LogMethod } from '@/common/decorators/LogMethod';

@Controller('trading')
export class TradingController {
  constructor(
    private readonly tradingService: TradingService,
    private readonly responseTransformer: ResponseTransformerService,
  ) {}

  @Get('session-token')
  @LogMethod()
  async getSessionToken(@Query() query: GetSessionTokenDto): Promise<any> {
    try {
      const apiResponse = await this.tradingService.getSessionToken(query);
      // const xxx = this.responseTransformer.transformSuccessResponse(apiResponse);
      return apiResponse;
    } catch (error) {
      return this.responseTransformer.transformErrorResponse(error);
    }
  }

  @Post('place-order')
  async placeOrder(@Body() body: PlaceOrderDto): Promise<any> {
    try {
      const result = await this.tradingService.placeOrder(body, body.broker);
      return this.responseTransformer.transformSuccessResponse(result);
    } catch (error) {
      return this.responseTransformer.transformErrorResponse(error);
    }
  }
}
