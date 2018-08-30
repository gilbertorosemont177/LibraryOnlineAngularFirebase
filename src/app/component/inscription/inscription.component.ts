import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {

  constructor(private cnx:AngularFireAuth,private router:Router){
                  
  }

  createUser( email:string, password:string,username:string){
    this.cnx.auth.createUserWithEmailAndPassword(email,password).then((user)=>{

        user.user.updateProfile({
            displayName:username,
            photoURL:""

        })
        this.router.navigate(['/succes']) 

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



}
