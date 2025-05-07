import { Injectable } from '@nestjs/common';
import { HttpService } from '../../_core/services/http.service';

@Injectable()
export class TastyTradeRepository {
  private readonly baseUrl = 'https://api.tastytrade.com/v1'; // Example base URL

  constructor(private readonly httpService: HttpService) {}

  async placeOrder(order: any): Promise<any> {
    const url = `${this.baseUrl}/orders`;
    return this.httpService.post(url, order);
  }

  async getMarketData(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/market-data/${symbol}`;
    return this.httpService.get(url);
  }
}
