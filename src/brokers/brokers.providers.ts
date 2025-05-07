import { Provider } from '@nestjs/common';
import { TastyService } from './tasty/tasty.service';
import { IbkrService } from './ibkr/ibkr.service';

export const BrokerProviders: Provider[] = [
  {
    provide: 'BROKER_MAP',
    useFactory: (
      tastyTradeService: TastyService,
      ibService: IbkrService,
    ) => ({
      TastyTrade: tastyTradeService,
      InteractiveBrokers: ibService,
    }),
    inject: [TastyService, IbkrService],
  },
];
