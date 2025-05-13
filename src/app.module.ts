import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';
import { TradingModule } from './trading/trading.module';

@Module({
  imports: [ConfigModule.forRoot(), CoreModule, TradingModule],
})
export class AppModule {}
