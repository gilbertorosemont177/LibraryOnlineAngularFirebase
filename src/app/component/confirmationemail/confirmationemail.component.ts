import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-confirmationemail',
  templateUrl: './confirmationemail.component.html',
  styleUrls: ['./confirmationemail.component.css']
})
export class ConfirmationemailComponent implements OnInit {

  useremail:string
  nameuser:string
  constructor( private router:Router,private cnxcurrentuser:AngularFireAuth) { }


  ngOnInit() {
    this.cnxcurrentuser.auth.onAuthStateChanged((user)=>{
      if(user.email.length>0){
          this.useremail=user.email
          this.nameuser=user.displayName
      }

    },()=>{

      this.router.navigate(['/home'])  

    })

  }


  homeReturn():void{
    this.router.navigate(['/home'])  
  }

}
