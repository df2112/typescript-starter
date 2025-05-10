import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PostSessions, SessionResponse } from '@lib/types/sessions';

@Injectable()
export class TastyRepository {
  private readonly baseUrl = 'https://api.tastytrade.com/v1'; // Example base URL

  constructor(private readonly httpService: HttpService) {}

  async createSession(payload: PostSessions): Promise<SessionResponse> {
    const url = `${this.baseUrl}/sessions`;
    const response = await firstValueFrom(
      this.httpService.post<SessionResponse>(url, payload),
    );
    return response.data;
  }

  async placeOrder(order: any): Promise<any> {
    const url = `${this.baseUrl}/orders`;
    const response = await firstValueFrom(this.httpService.post(url, order));
    return response?.data;
  }

  async getMarketData(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/market-data/${symbol}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response?.data;
  }
}
