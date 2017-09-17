import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Custom Components
import { AppComponent } from './app.component';
import { NewMessageComponent } from './new-message-component';
import { NewMsgComponent } from './new-msg.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';

//Customer Services
import {WebService} from './web.service';

var routes = [
	{
	path : '' ,
	component : HomeComponent
	},
	{
		path : 'messages' ,
		component : NewMsgComponent
	},
	{
		path : 'messages/:name' ,
		component : NewMsgComponent
	}
	];

@NgModule({
  declarations: [
    HomeComponent , AppComponent , NewMessageComponent, NewMsgComponent , NavComponent
  ],
  imports: [
    BrowserModule , MaterialModule , BrowserAnimationsModule , HttpModule , FormsModule , RouterModule.forRoot(routes)
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
