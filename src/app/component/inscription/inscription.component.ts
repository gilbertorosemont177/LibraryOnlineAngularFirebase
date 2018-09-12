import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";


import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {

  msg:string;
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
      this.msg=error.message
        console.log(error.message)

  })

  }
  
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z@._]+$')]);
  
  username= new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z._]+$')])
  hide = true;

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Vous devez saisir un email ' :
        this.email.hasError('email') ? 'email nest pas valide' :this.email.hasError('pattern')
        ? 'email nest pas correct':this.email.hasError('pattern')?"juste des lettres ou  . _ ":
            '';
  }

  getErrorMessageUsername(){
    return this.username.hasError('required') ? 'Vous devez saisir un username minimun 4 lettres' :this.username.hasError('pattern')? "Il ya des caracteres pas valides dans votre username "
:
    // this.username.hasError('pattern')
    // ? 'username nest pas correct':
        '';

  }



}
