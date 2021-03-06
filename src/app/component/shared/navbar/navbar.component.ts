import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AngularFireAuth } from "angularfire2/auth";
import { LoginServiceFireBase  } from "./../../login/login.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titrelogin:string="Se connecter/S'inscrire";
  constructor( private cnxserviceslogin:LoginServiceFireBase,private routes:Router,private authcnx:AngularFireAuth) { 

    
        this.cnxserviceslogin.changeTitle().subscribe((data)=>{

          this.titrelogin=data
        })
      
  }

  ngOnInit() {

    this.authcnx.authState.subscribe((user)=>{

      if(user){
        this.titrelogin=user.email
      }
      else{
              this.titrelogin="Se connecter/S'inscrire"
        }
    })



//     let user = this.authcnx.auth.currentUser
// console.log(user)
  
//     if(user|| localStorage.length>0){
     
//         //this.titrelogin=user.email
//         console.log("link nav"+this.titrelogin)
     
//     }
//     else{
//       this.titrelogin="Se connecter/S'inscrire"
//     }
  }
  //  
  infoBook(booksearched:string){

      this.routes.navigate(['/search',booksearched])

  }

 
}
