import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type:string="password";
  eyeIcon:string='slash-fill';
  isText:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  hideShow()
  {
    this.isText=!this.isText;
    this.isText?this.eyeIcon='fill':this.eyeIcon='slash-fill';
    this.isText?this.type="text":this.type="password";
  }



}
