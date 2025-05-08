import { Provider } from '@nestjs/common';
import { TastyService } from './tasty/tasty.service';
import { IbkrService } from './ibkr/ibkr.service';

export const BrokerProviders: Provider[] = [
  {
    provide: 'BROKER_MAP',
    useFactory: (
      tastyService: TastyService,
      ibkrService: IbkrService,
    ) => ({
      TastyTrade: tastyService,
      InteractiveBrokers: ibkrService,
    }),
    inject: [TastyService, IbkrService],
  },
];
