import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { User } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myamplifyapp';

  async ngOnInit() {
    await DataStore.save(
      new User({
      "mail": "test12346789@testemailtestemail.com",
      "name": "Lorem ipsum dolor sit amet",
      "password": "Lorem ipsum dolor sit amet"
    })
  );
  }
}
