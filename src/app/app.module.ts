import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Custom Components
import { AppComponent } from './app.component';
import { NewMessageComponent } from './new-message-component';
import { NewMsgComponent} from './new-msg.component';

//Customer Services
import {WebService} from './web.service';

@NgModule({
  declarations: [
    AppComponent , NewMessageComponent, NewMsgComponent
  ],
  imports: [
    BrowserModule , MaterialModule , BrowserAnimationsModule , HttpModule , FormsModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
