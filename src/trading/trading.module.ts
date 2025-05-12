import { Module } from '@nestjs/common';
import { TradingController } from './trading.controller';
import { TradingService } from './trading.service';
import { BrokersModule } from '../brokers/brokers.module';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [BrokersModule, CoreModule], // Import dependencies
  controllers: [TradingController], // Register the controller
  providers: [TradingService], // Register the service
})
export class TradingModule {}
