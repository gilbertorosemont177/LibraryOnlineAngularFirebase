import { Injectable,EventEmitter } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { HomeUserService } from "../homeuser/homeuser.service";
import { UserBooks } from '../inscription/user.model';
import { delay, map } from 'rxjs/operators';
@Injectable()
export class LoginServiceFireBase {
   private logintitle= new EventEmitter<string>()
   public loginwithGmailOrFaceb= new EventEmitter<string>()
    public constructor(private cnxService:HomeUserService, private fireDatabase:AngularFirestore, private cnx:AngularFireAuth, private router:Router){
    }
    public addUserFireStoreCloud(u:UserBooks){
      let cnxfirecloud=  this.fireDatabase.firestore.collection('usersbooks')
      cnxfirecloud.add(u)
    }
    public  userExist(email){
                   
        return new Promise((resolve,reject)=>{
           
            let cnxfirecloud=   this.fireDatabase.
            collection('usersbooks',ref=>ref.where('email' ,'==',email))
            .valueChanges().subscribe( ((result)=>{
                console.log("result promise user exist :" +result.length)
                resolve(result.length) 
                    }) )
           
            
        })
    }
    


    public login( username:string,password:string):Promise<firebase.auth.UserCredential>{
         
       return this.cnx.auth.signInWithEmailAndPassword(username, password)
   
    }
    public getAllBooks(){
       return this.fireDatabase.collection('books').valueChanges()

    }
    public signOut(){
       localStorage.clear()
     
    this.cnxService.clearHistory()
        this.cnx.auth.signOut()
       
        this.changeTitle().emit("Se connecter/S'inscrire")
        window.location.href="./home"
        

    }

    public changeTitle():EventEmitter<string>{
        return this.logintitle
    }
    public SigninWithGmailOrFacebook():EventEmitter<string>{

        return this.loginwithGmailOrFaceb
    }
    private infoapigmailfacebook:any[]=[]
    saveApiInfoGmailFaceCnx(obj:any):void{
        this.infoapigmailfacebook.push(obj)
    }
    getApiInfoGmailFaceCnx():any[]{
        return this.infoapigmailfacebook
    }
    clearInfoGmailFaceCnx():void{
                this.infoapigmailfacebook=[]
    }
}