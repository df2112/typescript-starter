import { Injectable } from '@nestjs/common';
import { TastyRepository } from '@tasty/tasty.repository';
import { IbkrRepository } from '@ibkr/ibkr.repository';
import { Broker } from './broker.interface';

@Injectable()
export class BrokerFactory {
  constructor(
    private readonly tastyRepository: TastyRepository,
    private readonly ibkrRepository: IbkrRepository,
  ) {}

  getRepository(broker: string): Broker {
    switch (broker) {
      case 'tasty':
        return this.tastyRepository;
      case 'ibkr':
        return this.ibkrRepository;
      default:
        throw new Error(`Unsupported broker: ${broker}`);
    }
  }
}
