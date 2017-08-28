import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
	selector : 'new-message',
	templateUrl: './new-message-component.html'
	})

export class NewMessageComponent {

	constructor(private webService : WebService){}

	owner = 'test';
	post() {
		console.log(this.owner)
	}
}