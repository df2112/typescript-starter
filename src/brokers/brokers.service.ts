import { Injectable } from '@nestjs/common';
import { BrokerFactory } from './broker.factory';
import { Broker } from './broker.interface';

@Injectable()
export class BrokerService {
  constructor(
    private readonly brokerRepositoryFactory: BrokerFactory,
  ) {}

  async createSession(broker: string, payload: any): Promise<any> {
    console.log(`\nBroker Service: getSessionToken`);
    console.log(`\nDTO: ${JSON.stringify(payload, null, 2)}`);
    return true;

    const repository: Broker =
      this.brokerRepositoryFactory.getRepository(broker);
    return repository.createSession(payload);
  }

  async placeOrder(broker: string, order: any): Promise<any> {
    const repository: Broker =
      this.brokerRepositoryFactory.getRepository(broker);
    return repository.placeOrder(order);
  }

  async getMarketData(broker: string, symbol: string): Promise<any> {
    const repository: Broker =
      this.brokerRepositoryFactory.getRepository(broker);
    return repository.getMarketData(symbol);
  }
}
