import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { IbkrRepository } from './ibkr/ibkr.repository';
import { TastyRepository } from './tasty/tasty.repository';
import { BrokerService } from './brokers.service';
import { BrokerFactory } from './broker.factory';
// import { BrokerProviders } from './brokers.providers';

@Module({
  imports: [HttpModule], // Add HttpModule here
  providers: [
    BrokerFactory,
    IbkrRepository,
    TastyRepository,
    // ...BrokerProviders,
    BrokerService,
  ],
  exports: [
    BrokerFactory,
    // BrokerService,
  ],
})
export class BrokersModule {}
