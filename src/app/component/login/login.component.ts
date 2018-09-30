import { Component, OnInit} from '@angular/core';
import { LoginServiceFireBase  } from "./login.service";
import {FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from "angularfire2/auth";
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';
import { UserBooks } from '../inscription/user.model';


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
  navigationSubscription
  constructor(private acr:ActivatedRoute, private router:Router,private cnxcurrentuser:AngularFireAuth,private loginservice:LoginServiceFireBase) {}

  ngOnInit() {  }
 
 
  //UseExist Async / this function use the  userExist method from loginservice wich return a Promise 
  emailresgistered:any
  public async emailRegisteredinFbase(email){
    const responseasync= await this.loginservice.userExist(email)
    this.emailresgistered=responseasync

    
  }
// login firebase
  loginfb(username:string,password:string){
  if(!this.ValidationFieldsLogin()){
    this.loginservice.login(username,password).then((user)=>{
     
         if(user.user.emailVerified==true){
           
          this.emailRegisteredinFbase(user.user.email)
          setTimeout(() => {
            if(this.emailresgistered<1){
              let newuser:UserBooks={

                  email:user.user.email,
                  uid:user.user.uid,
                  emailverified:user.user.emailVerified,
                  img:user.user.photoURL,
                  provider:"",
                  username:user.user.displayName

              }
              this.loginservice.addUserFireStoreCloud(newuser)
            }
            else{
              console.log("it exist in BD")
            }
          }, 2000);
          
          this.router.navigate(['/waiting'])
          setTimeout(()=>{
   
                this.router.navigate(['/succes/listemybooks']) 
               localStorage.setItem('web','books')
                this.loginservice.changeTitle().emit(user.user.email)
                
             }, 3000)
       }
       else{
         this.msgemaildontverified=" Vous n'avez pas encore activé votre compte vous devez vérifier votre email"
         this.router.navigate(['./signinup/login'])
         this.email.setValue("")
         this.password.setValue("")
         this.loginservice.signOut()
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
  msgemaildontverified:string
  ValidationFieldsLogin():boolean{

    return(this.email.invalid || this.email.invalid)?true:false
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
        this.router.navigate(['/succes/listemybooks']) 
      
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
    providerGoogle.addScope(""
    )
    providerGoogle.setCustomParameters({
      prompt: 'select_account'
      
   });
    firebase.auth().signInWithPopup(providerGoogle).then((result)=> {
      
    if(result.user){ 
      this.emailRegisteredinFbase(result.user.email)
      
      window.location.href="./succes/listemybooks"
    
      
    }
  }).catch((error) =>{
      
      this.msg = error.message;
      
    });
}






}
