import {Component} from '@angular/core';
import {WebService} from './web.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector : 'new-msg',
	templateUrl : './new-msg.component.html'
	})

export class NewMsgComponent {
	constructor(private webService : WebService ,private route : ActivatedRoute){}
	messages;
	 ngOnInit(){
		var name = this.route.snapshot.params.name;
		 this.webService.getMessages(name);
		 this.webService.messageSubject.subscribe(messages => {
		 	this.messages = messages;
		 	})
	}
		// messages = this.webService.messages;
	  // messages = []
	  // async ngOnInit() {
	  // 	var response = await this.webService.getMessages();
	  // 	this.messages =  response.json();

	  // }

}