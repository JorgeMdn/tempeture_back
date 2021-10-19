import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Temperature } from "./models/temperature";

//@WebSocketGateway(80,{namespace: 'temperature'})
@WebSocketGateway()
export class TemperatureGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

    @WebSocketServer()
    server: Server;
    
    afterInit(server: Server) {
        console.log('Inicializado');
        
    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log(`Client connected: ${client.id}`);
        
    }
    handleDisconnect(client: Socket) {
        console.log(`Client connected: ${client.id}`);
        
    }

    @SubscribeMessage('temperature')
    //handleTemperature(@MessageBody() temperature: Temperature): WsResponse<unknown>{
        handleTemperature(@MessageBody() temperature: Temperature):void{
        try {
            //return {event:'temperature', data:'prueba'};
            this.server.emit('temperature', temperature);
        } catch (error) {
            console.log(error);
        }
    }

    changeTemperature(temperatureData: Temperature):boolean{
        try {
            this.server.emit('temperature', temperatureData);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}