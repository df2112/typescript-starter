import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PostSessions, SessionResponse } from '@/brokers/tasty/types/sessions';
import { GetSessionTokenDto } from '@/common/dtos/get-session-token.dto';
import { LogMethod } from '@/common/decorators/LogMethod';

@Injectable()
export class TastyRepository {
  private readonly baseUrl = 'https://api.cert.tastyworks.com'; // Example base URL

  constructor(private readonly httpService: HttpService) {}

  @LogMethod()
  async createSession(payload: GetSessionTokenDto): Promise<SessionResponse> {
    const url = `${this.baseUrl}/sessions`;

    const postSessionsBody: PostSessions = {
      login: 'dfoley5150',
      password: 'X_iN62_U!FXwh2V',
      'remember-me': true,
      // 'remember-token': 'optional-token-if-needed'
    };

    const response = await firstValueFrom(
      this.httpService.post(url, postSessionsBody, {
        headers: {
          'User-Agent': 'tetrachord-backend/1.0.0',
          'Content-Type': 'application/json',
        },
      }),
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
