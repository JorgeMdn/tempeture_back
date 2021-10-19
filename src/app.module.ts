import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureGateway } from './temperature.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,TemperatureGateway],
})
export class AppModule {}
