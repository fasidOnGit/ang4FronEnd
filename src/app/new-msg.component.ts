import {Component} from '@angular/core';
import {WebService} from './web.service';

@Component({
	selector : 'new-msg',
	templateUrl : './new-msg.component.html'
	})

export class NewMsgComponent {
	constructor(private webService : WebService){}

	  messages = []
	  async ngOnInit() {
	  	var response = await this.webService.getMessages();
	  	this.messages =  response.json();

	  }

}