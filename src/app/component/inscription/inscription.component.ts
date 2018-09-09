import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";


import { Router } from '@angular/router';


import * as firebase from 'firebase';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {


  //signup:boolean=false;

  useremail:string;
  constructor(private cnx:AngularFireAuth,private router:Router,private authfba:AngularFireAuthModule){
                  
  }

  createUser( email:string, password:string,username:string){
    this.cnx.auth.createUserWithEmailAndPassword(email,password).then((user)=>{

      user.user.updateProfile({
            displayName:username,
            photoURL:"",
      })
             user.user.sendEmailVerification().then(()=>{

            this.router.navigate(['/account']) 
    
          }).catch((error)=>{
                  console.log(error)
           })

      

    }
  
  ).catch((error)=>{
        console.log(error.message)

  })

  }
  
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  loginWithFbook(){
    const provider=new firebase.auth.FacebookAuthProvider;
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    
   
    this.cnx.auth.signInWithPopup(provider).then((result)=>{
      
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  }

  loginWithGoogle(){



  }



}