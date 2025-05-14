import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { IbkrRepository } from './ibkr/ibkr.repository';
import { TastyRepository } from './tasty/tasty.repository';
import { BrokerFactory } from './broker.factory';
import { ConfigModule } from '@nestjs/config';
// import { BrokerProviders } from './brokers.providers';

@Module({
  imports: [ConfigModule, HttpModule], // Add HttpModule here
  providers: [
    BrokerFactory,
    IbkrRepository,
    TastyRepository,
    // ...BrokerProviders,
  ],
  exports: [
    BrokerFactory,
  ],
})
export class BrokersModule {}
