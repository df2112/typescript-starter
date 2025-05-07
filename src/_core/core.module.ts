import { Module } from '@nestjs/common';
import { HttpService } from './services/http.service';
import { ResponseTransformerService } from './services/response-transformer.service';

@Module({
  providers: [HttpService, ResponseTransformerService],
  exports: [HttpService, ResponseTransformerService],
})
export class CoreModule {}
