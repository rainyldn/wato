import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';

  constructor(http: Http) {
    http.request('api/test').subscribe((res: TestResponse) => {
      this.title += res.json().message;
    });
  }
}

class TestResponse extends Response {
  message: String;
}