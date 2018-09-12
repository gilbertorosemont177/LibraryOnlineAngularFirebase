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
  constructor( private cnxrouter:Router,private firestoreBase:LoginServiceFireBase, private authentification:AngularFireAuth
  ) { 
    this.authentification.authState.subscribe((user)=>{
      if(user){
        console.log("EMAIL -GT:"+user.email)
        console.log("EMAIL VERIFIED -GT"+user.emailVerified)
        this.username=user.displayName
      //  this.listebookOfFireDB   = this.firestoreBase.getAllBooks()
        this.firestoreBase.changeTitle().emit(user.email)
        this.username=user.displayName
        

      }

    })
    

  }

  ngOnInit() {

    

    
   
    }

    logout():void{

        this.firestoreBase.signOut()

    }

}
