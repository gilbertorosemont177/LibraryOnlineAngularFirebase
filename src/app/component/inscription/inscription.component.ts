import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup, FormBuilder, } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";


import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  msg:string;
  formValidation:true
  msgValidationFields:string
  
  constructor(private formBuilder: FormBuilder,private cnx:AngularFireAuth,private router:Router,private authfba:AngularFireAuthModule){
                  
  }
  ngOnInit(){  }

  formValidations():boolean{
    return (this.email.invalid || this.password.invalid || this.username.invalid || this.cpassword.invalid)? true :false
  }

  createUser( email:string, password:string,username:string){
if(!this.formValidations()){
  this.cnx.auth.createUserWithEmailAndPassword(email,password).then((user)=>{

      user.user.updateProfile({
            displayName:username,
            photoURL:"",
      })
             user.user.sendEmailVerification().then(()=>{

            this.router.navigate(['/account']) 
    
          }).catch((error)=>{
            console.log(error)
           })
          }
  
  ).catch((error)=>{
      this.msg=error.message
        console.log(error.message)

  })
}
else{
  this.msgValidationFields="Des Champs invalides ou vides dans le formulaire"
  setTimeout(()=>{ this.msgValidationFields="";
  console.log("time out")},3000)
} 
  }
  
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z@._]+$')]);
  password= new FormControl('',[Validators.required,Validators.minLength(6)])
  
  cpassword= new FormControl('', [Validators.required])
  username= new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z._]+$'),Validators.minLength(4)])
  hide = true;
  matchP:boolean;

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Vous devez saisir un email ' :
        this.email.hasError('email') ? 'email nest pas valide' :this.email.hasError('pattern')
        ? 'email nest pas correct':this.email.hasError('pattern')?"juste des lettres ou  . _ ":
            '';
  }

  getErrorMessageUsername(){
    return this.username.hasError('required') ? 'Vous devez saisir un username minimun 4 lettres' :
    this.username.hasError('pattern')? "Il ya des caracteres pas valides dans votre username ":
    this.username.hasError('minlength')? " vous devez saisir un username de minimun 4 lettres":
        '';

  }
  msgMatchPcP:string
  matchPasswords(e,confirmationpsw):void{
    if(confirmationpsw!=this.password.value){
       this.matchP=true
       this.msgMatchPcP="le mot de passe et la confirmation du mot passe ne correspondent pas"
       console.log("confirmation : "+confirmationpsw +" matchp :"+this.matchP)
    }
    else{
      this.matchP=false
      
    }
  
}
getpasswordError(){
 
  return this.password.hasError('required')? "Vous devez saisir un password":this.password.hasError('minlength')?"le password doit contenir au moins 6 caracteres":""
}

getMatchpasswordError(){

  return this.cpassword.hasError('required')? "Vous devez confirmer le password":"";
}


}
