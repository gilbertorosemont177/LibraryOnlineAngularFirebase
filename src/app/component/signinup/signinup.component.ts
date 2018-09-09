import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit {

  constructor(private cnx:AngularFireAuth, private router:Router,private aroute:ActivatedRoute) { }

  ngOnInit() {
    let user = this.cnx.auth.currentUser;


            if(user){
              if (user.emailVerified==true) {
                this.router.navigate(['/succes'])  
              } 
            }


  }


  signIn():void{
    this.router.navigate(['./login'],{relativeTo:this.aroute})

  }

  signUp():void{
    this.router.navigate(['./inscription'],{relativeTo:this.aroute} )

  }




}
