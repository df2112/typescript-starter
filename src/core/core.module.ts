import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ResponseTransformerService } from './services/response-transformer.service';

@Module({
  imports: [HttpModule],
  providers: [ResponseTransformerService],
  exports: [ResponseTransformerService],
})
export class CoreModule {}
