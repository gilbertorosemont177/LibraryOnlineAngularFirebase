import { Injectable,EventEmitter } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from "angularfire2/firestore";
import { Observable } from 'rxjs';
@Injectable()
export class LoginServiceFireBase {
   private logintitle= new EventEmitter<any>();
    public constructor( private fireDatabase:AngularFirestore, private cnx:AngularFireAuth, private router:Router){
    }
    
    public login( username:string,password:string):Promise<firebase.auth.UserCredential>{
         
       return this.cnx.auth.signInWithEmailAndPassword(username, password)
    //.then(()=>{
         
    //     this.router.navigate(['/succes'])  
         

       //}
     

    
//     ).catch((errors)=> {
        
//         // Handle Errors here.
        
//     //     var errorCode = errors.code;
//     //    // var errorMessage = error.message;
//     //     if (errorCode === 'auth/wrong-password') {
//     //    //    errorMessage=errors.message
//     //      // alert('Wrong password.');
//     //     } else {
//     //       alert(errorMessage);
//     //     }
//    console.log(errors);
//       });

    }
    public getAllBooks(){
       return this.fireDatabase.collection('books').valueChanges()

    }
    public signOut(){
        this.cnx.auth.signOut().then(()=>{

            console.log("SignOut")
        }).catch(()=>{

            console.log("Erreur")

        })
        // .then(()=>{
            
        //     this.router.navigate(['/home'])  
        //     this.changeTitle().emit("Se connecter/S'inscrire")

        // }  ).catch((error)=>{
        //     let err=error.message

        // });
        this.changeTitle().emit("Se connecter/S'inscrire")
        this.router.navigate(['/home'])  

    }

    public changeTitle(){
        return this.logintitle
    }


}