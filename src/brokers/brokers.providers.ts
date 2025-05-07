import { Provider } from '@nestjs/common';
import { TastyTradeService } from './tasty/tasty.service';
import { InteractiveBrokersService } from './ibkr/ibkr.service';

export const BrokerProviders: Provider[] = [
  {
    provide: 'BROKER_MAP',
    useFactory: (
      tastyTradeService: TastyTradeService,
      ibService: InteractiveBrokersService,
    ) => ({
      TastyTrade: tastyTradeService,
      InteractiveBrokers: ibService,
    }),
    inject: [TastyTradeService, InteractiveBrokersService],
  },
];
