import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router,ActivatedRoute } from '@angular/router';
import { LoginServiceFireBase } from '../login/login.service';

@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit {
  providersGF:string=""
  constructor(private providersfg :LoginServiceFireBase,private cnx:AngularFireAuth, private router:Router,private aroute:ActivatedRoute) { 
    this.providersGF=localStorage.getItem('provider')!=null? localStorage.getItem('provider'):''
  }

  ngOnInit() {
   
    let user = this.cnx.auth.currentUser;
    
    if(user && localStorage.length>0){
        if(this.providersGF!=''){
          this.router.navigate(['/succes'])
        }
        else{
           if (user.emailVerified==true) {
                this.router.navigate(['/succes'])  
              } 
            
          }
        }
        else{
          this.providersfg.changeTitle().emit("Se connecter/S'inscrire")
        }
  }


  signIn():void{
    this.router.navigate(['./login'],{relativeTo:this.aroute})

  }

  signUp():void{
    this.router.navigate(['./inscription'],{relativeTo:this.aroute} )

  }




}
