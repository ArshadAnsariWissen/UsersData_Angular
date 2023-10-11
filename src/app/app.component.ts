import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverElements = [{name:'Arshad', email:'arshad@gmail.com', mobile:9826261818}];

  constructor() {
  }
  ngOnInit() {
  }

  enterNewUser(name: HTMLInputElement, email: HTMLInputElement, mobile: HTMLInputElement) {
      this.serverElements.push({
        name: name.value,
        email: email.value,
        mobile:  Number(mobile.value)
      })
  }
}
