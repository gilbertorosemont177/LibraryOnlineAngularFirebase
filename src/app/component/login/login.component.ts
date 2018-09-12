import { Component, OnInit,HostBinding } from '@angular/core';
import { LoginServiceFireBase  } from "./login.service";
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router,ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=true
  msg:string;
  url:string;
  constructor(private firestoreBase:LoginServiceFireBase,private aroute:ActivatedRoute, private router:Router,private cnxcurrentuser:AngularFireAuth,private loginservice:LoginServiceFireBase) {}

  ngOnInit() {
            
  }
  // login firebase
  loginfb(username:string,password:string){
      this.loginservice.login(username,password).then(
        
   (user)=>{
      
      if(user.user.emailVerified==true){

      this.router.navigate(['/waiting'])
       setTimeout(()=>{

             this.router.navigate(['/succes']) 
             this.loginservice.changeTitle().emit(user.user.email)
             
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

  //login with facebook
  loginWithFbook(){
    const providerFacebook=new firebase.auth.FacebookAuthProvider;
    
    providerFacebook.setCustomParameters({
      'display': 'popup'
    });
    
   
    this.cnxcurrentuser.auth.signInWithPopup(providerFacebook).then((result)=>{
     if(result.user){
      if(result.user.emailVerified==true){
        this.router.navigate(['/succes']) 
      }
    }
      else{
        this.router.navigate(['/login']) 
      }
  console.log(result)
  console.log(result.user)

}).catch((error)=> {

    this.msg=error.message
  
});
  }
  // login with Google
  loginWithGoogle(){

    const providerGoogle=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(providerGoogle).then((result)=> {
    if(result.user){ 
      
      if(result.user.emailVerified==true){
           this.router.navigate(['/succes']) 
        
        console.log("depuis login google-1"+result)
    console.log("depuis login google-2"+result.user)
    
      }
    }
  }).catch((error) =>{
      
      this.msg = error.message;
      
    });
}






}
