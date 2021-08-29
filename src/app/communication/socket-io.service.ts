import { Inject, InjectionToken } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CommunicationService } from './communication-service';

export const SOCKET_IO = new InjectionToken<CommunicationService>('socket.io service provider',
	{
		providedIn: 'root',
		factory: () => new SocketIoService(Inject(Socket)),
	})

export class SocketIoService implements CommunicationService {

	constructor(private socket: Socket) { }
}
