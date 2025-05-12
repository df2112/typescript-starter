import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PostSessions, SessionResponse } from '@lib/types/sessions';
import { GetSessionTokenDto } from '@/_common/dtos/get-session-token.dto';
import { Session } from 'inspector/promises';
import { LogMethod } from '@/_common/decorators/LogMethod';

@Injectable()
export class TastyRepository {
  private readonly baseUrl = 'https://api.tastytrade.com/v1'; // Example base URL

  constructor(private readonly httpService: HttpService) {}

  @LogMethod()
  async createSession(payload: GetSessionTokenDto): Promise<SessionResponse> {
    const url = `${this.baseUrl}/sessions`;

    const sessionResponseStub: SessionResponse = {
      user: {
        email: 'user@example.com',
        'external-id': '12345',
        'is-confirmed': 'true',
        name: 'John Doe',
        nickname: 'johnd',
        username: 'johndoe',
      },
      'remember-token': 'abc123def456ghi789',
      'session-expiration': '2025-05-19T12:00:00Z',
      'session-token': 'xyz987uvw654rst321',
    };

    return sessionResponseStub;

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
