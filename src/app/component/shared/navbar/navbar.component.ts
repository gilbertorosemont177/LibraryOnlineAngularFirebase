import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titrelogin:string="Se connecter/S'inscrire";
  constructor( private routes:Router,private authcnx:AngularFireAuth) { }

  ngOnInit() {
    let user = this.authcnx.auth.currentUser


    if(user){
     // if (user.emailVerified===true) {
        this.titrelogin=user.email
        console.log("link nav"+this.titrelogin)
      //} 
    }
  }
  //  
  infoBook(booksearched:string){

      this.routes.navigate(['/search',booksearched])

  }

}
