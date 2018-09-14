import { Injectable,EventEmitter } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from "angularfire2/firestore";
import { Observable } from 'rxjs';
@Injectable()
export class LoginServiceFireBase {
   private logintitle= new EventEmitter<string>()
   public loginwithGmailOrFaceb= new EventEmitter<string>()
    public constructor( private fireDatabase:AngularFirestore, private cnx:AngularFireAuth, private router:Router){
    }
    
    public login( username:string,password:string):Promise<firebase.auth.UserCredential>{
         
       return this.cnx.auth.signInWithEmailAndPassword(username, password)
   
    }
    public getAllBooks(){
       return this.fireDatabase.collection('books').valueChanges()

    }
    public signOut(){
       localStorage.clear()
    
        this.cnx.auth.signOut().then(()=>{

            console.log("SignOut")
        }).catch(()=>{

            console.log("Erreur")

        })
       
        this.changeTitle().emit("Se connecter/S'inscrire")
        this.router.navigate(['/home'])
        

    }

    public changeTitle():EventEmitter<string>{
        return this.logintitle
    }
    public SigninWithGmailOrFacebook():EventEmitter<string>{

        return this.loginwithGmailOrFaceb
    }
}