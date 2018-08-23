import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from "angularfire2/firestore";
@Injectable()
export class LoginServiceFireBase {

    public constructor( private fireDatabase:AngularFirestore, private cnx:AngularFireAuth, private router:Router){
    }
    
    public login( username:string,password:string){

       this.cnx.auth.signInWithEmailAndPassword(username, password).then((result)=>{
            this.router.navigate(['/succes'])

        })

    }
    public getAllBooks(){
       return this.fireDatabase.collection('books').valueChanges()

    }




}