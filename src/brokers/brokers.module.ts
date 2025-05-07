import { Module } from '@nestjs/common';
import { TastyTradeService } from './tasty/tasty.service';
import { InteractiveBrokersService } from './ibkr/ibkr.service';
import { BrokerProviders } from './brokers.providers';

@Module({
  providers: [TastyTradeService, InteractiveBrokersService, ...BrokerProviders],
  exports: ['BROKER_MAP'],
})
export class BrokersModule {}
