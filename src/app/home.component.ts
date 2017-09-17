import { Component , ViewChild } from '@angular/core';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message-component';
import { NewMsgComponent} from './new-msg.component';
import { NavComponent } from './nav.component';
@Component({
  selector: 'home',
  template: `<new-message></new-message>
             <new-msg></new-msg>`,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {

  // @ViewChild(NewMsgComponent) msg : NewMsgComponent;

  // onPosted(message) {
  //   this.msg.messages.push(message);
  // }
  // messages = []

  // constructor(private webService : WebService){}

  // async ngOnInit(){
  //   var response = await this.webService.getMessages();
  //   this.messages = response.json();
  // }
  
}
