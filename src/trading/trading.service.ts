import { Injectable, Inject } from '@nestjs/common';
import { Broker } from '../brokers/broker.interface';
import { GetSessionTokenDto } from '@/_common/dtos/get-session-token.dto';
import { BrokerService } from '@/brokers/brokers.service';

@Injectable()
export class TradingService {
  constructor(private readonly brokerService: BrokerService) {}

  async getSessionToken(dto: GetSessionTokenDto): Promise<any> {
    console.log(`\nTrading Service: getSessionToken`);
    console.log(`\nDTO: ${JSON.stringify(dto, null, 2)}`);
    return true;

    // const broker = this.brokerMap[dto.broker];
    // if (!broker) {
    //   throw new Error(`Broker ${dto.broker} not supported`);
    // }
    // return this.brokerService.createSession(dto.broker, dto);
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
