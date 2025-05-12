import { Module } from '@nestjs/common';
import { CoreModule } from './_core/core.module';
import { TradingModule } from './trading/trading.module';

@Module({
  imports: [CoreModule, TradingModule],
})
export class AppModule {}
