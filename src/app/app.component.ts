import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBeP5LusagujtOLw3qx5DZK1sbF8dIb0RA',
  databaseURL: 'https://chatroom-sduteam.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase-Chat-Example';

  constructor() {
    firebase.initializeApp(config);
  }
}
