import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginServiceFireBase } from "./../login/login.service";
import { Router } from '@angular/router';
import { HomeUserService } from '../homeuser/homeuser.service';


import { Location } from '@angular/common';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  listebookOfFireDB;
  indexlast:number;
  username:string;
  imgUser:string;
  constructor( private service: HomeUserService, private cnxrouter:Router,private firestoreBase:LoginServiceFireBase, private authentification:AngularFireAuth

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
  private routevisited:string
  ngOnInit() {
    this.indexlast= this.service.getlistUrl().length
  if(this.indexlast>0){
    
    this.routevisited=this.service.getlistUrl()[this.indexlast-1]
    this.cnxrouter.navigate(["./"+this.routevisited])
    console.log("HOME USER COMPONENT TEST URL "+this.routevisited.toString())
  }

}
    logout():void{

        this.firestoreBase.signOut()

    }
    test(){
      console.log(" test")
    }
    

}
