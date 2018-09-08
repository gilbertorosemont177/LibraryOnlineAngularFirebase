import { Component, OnInit,HostBinding } from '@angular/core';
import { LoginServiceFireBase  } from "./login.service";
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=true
  msg:string;
  constructor( private router:Router,private cnxcurrentuser:AngularFireAuth,private loginservice:LoginServiceFireBase) { }

  ngOnInit() {
    
    var user = this.cnxcurrentuser.auth.currentUser;
    if (user.emailVerified==true) {
        this.router.navigate(['/succes'])  
    } 
  }

  loginfb(username:string,password:string){
      this.loginservice.login(username,password).then(
        
   (user)=>{
      
      if(user.user.emailVerified==true){

      this.router.navigate(['/waiting'])
       setTimeout(()=>{
        
             this.router.navigate(['/succes']) 
          }, 3000)
    }
    else{
      this.router.navigate(['/login'])
    }
  }
      
    ).catch((errors)=>{

      this.msg=errors.message

   console.log(errors.code);
    } )

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  hidePassword(){
    this.hide=!this.hide
  }


}
