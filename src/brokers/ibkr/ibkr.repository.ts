import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class IbkrRepository {
  private readonly baseUrl = 'https://api.ibkr.com/v1'; // Example base URL

  constructor(private readonly httpService: HttpService) {}

  async createSession(payload: any): Promise<any> {
    const url = `${this.baseUrl}/sessions`;
    const response = await firstValueFrom(
      this.httpService.post<any>(url, payload),
    );
    return response.data;
  }

  async getCustomer(): Promise<any> {
    return true;
  }

  async placeOrder(order: any): Promise<any> {
    const url = `${this.baseUrl}/orders`;
    const response = await this.httpService.post(url, order).toPromise();
    return response?.data;
  }

  async getMarketData(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/market-data/${symbol}`;
    const response = await this.httpService.get(url).toPromise();
    return response?.data;
  }
}
