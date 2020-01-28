import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private submited:boolean = false;
  private data;

  constructor() { 
    this.data = {
      username: "",
      password: ""
    }
    this.submited = false;
    console.log("da fak", this.submited);
  }

  ngOnInit() {
  }

  public onSubmit(){
    this.submited = true;
    console.log(this.data);
  }

}
