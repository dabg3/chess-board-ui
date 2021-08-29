import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

// url of middleware socketIo server
const socketConf: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		SocketIoModule.forRoot(socketConf)
	],
	exports: [
	]
})
export class CommunicationModule { }
