import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//Reactive Extensions Library - rxjs
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class WebService {
	BASE_URL = 'http://localhost:9597/api';

	private messageStore = [];
	private messageSubject = new Subject();

	messages = this.messageSubject.asObservable();

	constructor(private http : Http , private sb : MdSnackBar) {
		 this.getMessages();
	}
	// async getMessages() {
	// 	try {
	// 		var response = await this.http.get(`${this.BASE_URL}/messages`).toPromise();
	// 		this.messages = response.json();
	// 		} catch (err) {
	// 			this.handleErr("Unable to get messages");
	// 		}

		
	// }
	 getMessages(user?) {
			
		user = (user) ? user : '';
		this.http.get(`${this.BASE_URL}/messages/${user}`).subscribe(response => {
			this.messageStore = response.json();
			this.messageSubject.next(this.messageStore);

		} , error => {
				this.handleErr("Unable to get messages")
			});

		}

	async postMessage(message) {
		try {			
			var response = await this.http.post(`${this.BASE_URL}/messages` , message).toPromise();
			this.messageStore.push(response.json());
			this.messageSubject.next(this.messageStore);
		} catch(err) {
			this.handleErr("Unable to post message");
		}

	}

	private handleErr(err){
		console.error(err);
		this.sb.open(err , 'CLOSE' , {duration : 2000});
	}
}