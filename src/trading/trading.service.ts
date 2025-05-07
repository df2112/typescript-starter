import { Injectable, Inject } from '@nestjs/common';
import { Broker } from '../brokers/broker.interface';

@Injectable()
export class TradingService {
  constructor(
    @Inject('BROKER_MAP') private readonly brokerMap: Record<string, Broker>,
  ) {}

  async placeOrder(order: any, brokerName: string): Promise<any> {
    const broker = this.brokerMap[brokerName];
    if (!broker) {
      throw new Error(`Broker ${brokerName} not supported`);
    }
    return broker.placeOrder(order);
  }
}
