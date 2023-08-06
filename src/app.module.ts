import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumController } from './sum/sum.controller';
import { SumService } from './sum/sum.service';

@Module({
  imports: [],
  controllers: [AppController, SumController],
  providers: [AppService, SumService],
})
export class AppModule {}
