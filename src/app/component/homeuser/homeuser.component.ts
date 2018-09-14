import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginServiceFireBase } from "./../login/login.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  listebookOfFireDB;
  username:string;
  imgUser:string;
  constructor( private cnxrouter:Router,private firestoreBase:LoginServiceFireBase, private authentification:AngularFireAuth
  )
  { 
    this.authentification.authState.subscribe((user)=>{
      if(user){
        console.log("EMAIL -GT:"+user.email)
        console.log("EMAIL VERIFIED -GT"+user.emailVerified)
        this.username=user.displayName
        this.firestoreBase.changeTitle().emit(user.email)
        this.username=user.displayName
        this.imgUser=user.photoURL
      }
      else{
        this.firestoreBase.changeTitle().emit("Se connecter/S'inscrire")
      }
    })
  }

  ngOnInit() {

    }

    logout():void{

        this.firestoreBase.signOut()

    }
    test(){
      console.log(" test")
    }
    

}
