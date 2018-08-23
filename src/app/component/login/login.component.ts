import { Component, OnInit,HostBinding } from '@angular/core';
import { LoginServiceFireBase  } from "./login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginservice:LoginServiceFireBase) { }

  ngOnInit() {
  
  }

  loginfb(username:string,password:string){
    this.loginservice.login(username,password)

  }


}
