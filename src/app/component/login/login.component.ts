import { Component, OnInit,HostBinding } from '@angular/core';
import { LoginServiceFireBase  } from "./login.service";
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router,ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=true
  msg:string;
  url:string;
  providersGF:string
  msgvalidatorsf:string;
  constructor( private router:Router,private cnxcurrentuser:AngularFireAuth,private loginservice:LoginServiceFireBase) {

   
   
  }

  ngOnInit() {
    

            
  }

  ValidationFieldsLogin():boolean{

    return(this.email.invalid || this.email.invalid)?true:false
  }
  // login firebase
  loginfb(username:string,password:string){
  if(!this.ValidationFieldsLogin()){
    this.loginservice.login(username,password).then(
        
      (user)=>{
         
         if(user.user.emailVerified==true){
   
         this.router.navigate(['/waiting'])
          setTimeout(()=>{
   
                this.router.navigate(['/succes']) 
   
       localStorage.setItem('web','books')
                this.loginservice.changeTitle().emit(user.user.email)
                
             }, 3000)
       }
       else{
         this.router.navigate(['/login'])
       }
     }
         
       ).catch((errors)=>{
   
         this.msg=errors.message
   
      console.log(errors.code);
       } )
   

  }
  else{
    this.msgvalidatorsf="Erreur les champs son vides ou invalides";
    setTimeout(()=>{ this.msgvalidatorsf=""},3000)
   
      

  }

     
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('', [Validators.required, Validators.minLength(6)])
  getErrorPassword(){
    

    return this.password.hasError('required')? 'vous devez saisir votre password':this.password.hasError('minlength')?'le password doit contenir au moins 6 caracteres':''
  }
  getErrorMessage() {
    
    return this.email.hasError('required') ? 'vous devez saisir votre email' :
        this.email.hasError('email') ? 'email pas valide' :
            '';
  }
  hidePassword(){
    this.hide=!this.hide
  }

  //login with facebook
  loginWithFbook(){
    const providerFacebook=new firebase.auth.FacebookAuthProvider();
    
    providerFacebook.setCustomParameters({
      'display': 'popup'
    });
    
    firebase.auth().signInWithPopup(providerFacebook).then((result)=>{
     if(result.user){
       localStorage.setItem('provider','facebook')
       //localStorage.setItem('web','books')
        this.router.navigate(['/succes']) 
      
    }
      else{
        this.router.navigate(['/login']) 
      }
  console.log(result)
  console.log(result.user)

}).catch((error)=> {

    this.msg=error.message
  
});
  }
  // login with Google
  loginWithGoogle(){

    const providerGoogle=new firebase.auth.GoogleAuthProvider();
    localStorage.setItem('provider','gmail')
    providerGoogle.setCustomParameters({
      prompt: 'select_account'
   });
    firebase.auth().signInWithPopup(providerGoogle).then((result)=> {
    if(result.user){ 
      
      //localStorage.setItem('provider','facebook')
      // localStorage.setItem('web','books')
           this.router.navigate(['/succes']) 
        
      
      
    }
  }).catch((error) =>{
      
      this.msg = error.message;
      
    });
}






}
