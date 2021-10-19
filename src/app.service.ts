import { Injectable } from '@nestjs/common';
import { Temperature } from './models/temperature';
import { TemperatureGateway } from './temperature.gateway';

@Injectable()
export class AppService {
  constructor(private temperatureGateWay: TemperatureGateway) {
    
  }
  updateTemperature(range: number, left: string, right: string): boolean {
    console.log(range, left,right);
    const temperatureData = new Temperature()
    temperatureData.range = range
    temperatureData.left = left
    temperatureData.right = right
    let messageSended: boolean = null
    messageSended = true
    messageSended = this.temperatureGateWay.changeTemperature(temperatureData)
    return  messageSended
  }
}
