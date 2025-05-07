import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { IbkrRepository } from './ibkr/ibkr.repository';
import { InteractiveBrokersService } from './ibkr/ibkr.service';
import { TastyTradeRepository } from './tasty/tasty.repository';
import { TastyTradeService } from './tasty/tasty.service';
import { BrokerProviders } from './brokers.providers';

@Module({
  imports: [HttpModule], // Add HttpModule here
  providers: [
    IbkrRepository,
    InteractiveBrokersService,
    TastyTradeRepository,
    TastyTradeService,
    ...BrokerProviders,
  ],
  exports: ['BROKER_MAP'],
})
export class BrokersModule {}
