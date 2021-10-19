import { Controller, Get, Param, ParseIntPipe, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('temperature')
  updateTemperature(@Query('t',ParseIntPipe) range: number,@Query('bi') left: string,@Query('bd') right: string): boolean {  
    return this.appService.updateTemperature(range,left, right);
  }
}
