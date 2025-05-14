import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

import { Customer } from './types/accounts-and-customers';
import { PostSessions, SessionResponse } from './types/users-and-sessions';
import { GetSessionTokenDto } from '@/common/dtos/get-session-token.dto';
import { LogMethod } from '@/common/decorators/LogMethod';

@Injectable()
export class TastyRepository {
  private readonly baseUrl = 'https://api.cert.tastyworks.com'; // Example base URL
  private sessionResponse: SessionResponse | null = null; // In-memory storage

  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  @LogMethod()
  async createSession(payload: GetSessionTokenDto): Promise<SessionResponse> {
    if (this.sessionResponse) {
      return this.sessionResponse; // Return cached session if exists
    }

    const url = `${this.baseUrl}/sessions`;

    const postSessionsBody: PostSessions = {
      login: this.configService.get<string>('LOGIN_USER')!,
      password: this.configService.get<string>('LOGIN_PWD'),
      'remember-me': false,
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

    this.sessionResponse = response.data.data;
    return response.data.data;
  }

  @LogMethod()
  async getCustomer(): Promise<Customer> {
    let authHeader;

    if (this.sessionResponse) {
      authHeader = this.sessionResponse['session-token'];
    }

    const url = `${this.baseUrl}/customers/me`;

    const reqConfig: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
        Authorization: authHeader,
        'Content-Type': 'application/json',
        'User-Agent': 'tetrachord-backend/1.0.0',
      },
    };

    const response = await firstValueFrom(this.httpService.get(url, reqConfig));
    return response.data.data;
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
