import { Injectable } from '@nestjs/common';
import { Broker } from '../broker.interface';
import { IbkrRepository } from './ibkr.repository';

@Injectable()
export class IbkrService implements Broker {
  constructor(private readonly ibkrRepository: IbkrRepository) {}

  async placeOrder(order: any): Promise<any> {
    // Delegate API communication to the repository
    return this.ibkrRepository.placeOrder(order);
  }

  async getMarketData(symbol: string): Promise<any> {
    // Delegate API communication to the repository
    return this.ibkrRepository.getMarketData(symbol);
  }
}
