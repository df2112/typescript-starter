import { Injectable } from '@nestjs/common';
import { Broker } from '../broker.interface';
import { TastyRepository } from './tasty.repository';

@Injectable()
export class TastyService implements Broker {
  constructor(private readonly tastyTradeRepository: TastyRepository) {}

  async placeOrder(order: any): Promise<any> {
    // Delegate API communication to the repository
    return this.tastyTradeRepository.placeOrder(order);
  }

  async getMarketData(symbol: string): Promise<any> {
    // Delegate API communication to the repository
    return this.tastyTradeRepository.getMarketData(symbol);
  }
}
