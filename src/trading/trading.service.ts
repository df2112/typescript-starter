import { Injectable, Inject } from '@nestjs/common';
import { Broker } from '../brokers/broker.interface';
import { GetSessionTokenDto } from '@/common/dtos/get-session-token.dto';
import { BrokerFactory } from '@/brokers/broker.factory';
import { LogMethod } from '@/common/decorators/LogMethod';

@Injectable()
export class TradingService {
  constructor(private readonly brokerFactory: BrokerFactory) {}

  @LogMethod()
  async getSessionToken(dto: GetSessionTokenDto): Promise<any> {
    const repository: Broker = this.brokerFactory.getRepository(dto.broker);
    const sessionResponseStub = await repository.createSession(dto);
    return sessionResponseStub;

    return true;

    // const broker = this.brokerMap[dto.broker];
    // if (!broker) {
    //   throw new Error(`Broker ${dto.broker} not supported`);
    // }
  }

  @LogMethod()
  async getCustomer(dto: GetSessionTokenDto): Promise<any> {
    const repository: Broker = this.brokerFactory.getRepository(dto.broker);
    const sessionResponseStub = await repository.getCustomer();
    return sessionResponseStub;

    return true;
  }

  async placeOrder(order: any, brokerName: string): Promise<any> {
    return true;
    // const broker = this.brokerMap[brokerName];
    // if (!broker) {
    //   throw new Error(`Broker ${brokerName} not supported`);
    // }
    // return broker.placeOrder(order);
  }
}
