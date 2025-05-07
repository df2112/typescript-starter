import { HttpService as NestHttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpService {
  constructor(private readonly http: NestHttpService) {}

  async get<T>(url: string, options?: any): Promise<T> {
    const response = await this.http.get<T>(url, options).toPromise();
    if (response?.data === undefined) {
      throw new Error('Response data is undefined');
    }
    return response.data;
  }

  async post<T>(url: string, body: any, options?: any): Promise<T> {
    const response = await this.http.post<T>(url, body, options).toPromise();
    if (response?.data === undefined) {
      throw new Error('Response data is undefined');
    }
    return response.data;
  }
}
