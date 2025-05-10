import { Injectable } from '@nestjs/common';
import { Broker } from '@brokers/broker.interface';
import { TastyRepository } from '@tasty/tasty.repository';
import { PostSessions, SessionResponse } from '@lib/types/sessions';

@Injectable()
export class TastyService implements Broker {
  constructor(private readonly tastyRepository: TastyRepository) {}

  async createSession(payload: PostSessions): Promise<SessionResponse> {
    return this.tastyRepository.createSession(payload);
  }

  async placeOrder(order: any): Promise<any> {
    // Delegate API communication to the repository
    return this.tastyRepository.placeOrder(order);
  }

  async getMarketData(symbol: string): Promise<any> {
    // Delegate API communication to the repository
    return this.tastyRepository.getMarketData(symbol);
  }
}
