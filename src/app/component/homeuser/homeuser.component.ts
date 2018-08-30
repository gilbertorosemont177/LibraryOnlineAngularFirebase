import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { LoginServiceFireBase } from "./../login/login.service";
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  listebookOfFireDB;
  constructor(private serviceFirebase:LoginServiceFireBase,
    private firestoreBase:LoginServiceFireBase, private authentification:AngularFireAuth
  ) { }

  ngOnInit() {

    this.authentification.auth.onAuthStateChanged((user)=>{
      if(user){
        console.log(user.email)
        this.listebookOfFireDB   = this.firestoreBase.getAllBooks()
    
      }

    })
   
    }

    logout():void{

        this.firestoreBase.sigOut()

    }

}
