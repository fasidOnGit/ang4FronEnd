import { Component } from '@angular/core';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = []

  constructor(private webService : WebService){}

  async ngOnInit(){
    var response = await this.webService.getMessages();
    this.messages = response.json();
  }
  title = 'Angular';
  
}
