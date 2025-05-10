import { Provider } from '@nestjs/common';
import { TastyService } from './tasty/XXX_tasty.service';
import { IbkrService } from './ibkr/XXX_ibkr.service';

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
