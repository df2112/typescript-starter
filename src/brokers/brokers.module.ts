import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { IbkrRepository } from './ibkr/ibkr.repository';
import { IbkrService } from './ibkr/XXX_ibkr.service';
import { TastyRepository } from './tasty/tasty.repository';
import { TastyService } from './tasty/XXX_tasty.service';
import { BrokerProviders } from './brokers.providers';

@Module({
  imports: [HttpModule], // Add HttpModule here
  providers: [
    IbkrRepository,
    IbkrService,
    TastyRepository,
    TastyService,
    ...BrokerProviders,
  ],
  exports: ['BROKER_MAP'],
})
export class BrokersModule {}
