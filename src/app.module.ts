import { Module } from '@nestjs/common';
import { CoreModule } from './_core/core.module';
import { TradingModule } from './trading/trading.module';
import { BrokersModule } from './brokers/brokers.module';

@Module({
  imports: [CoreModule, TradingModule, BrokersModule],
})
export class AppModule {}
