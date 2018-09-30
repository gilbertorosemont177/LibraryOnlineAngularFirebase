import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginServiceFireBase } from "./../login/login.service";
import { Router,ActivatedRoute } from '@angular/router';
import { HomeUserService } from '../homeuser/homeuser.service';
import { UserBooks } from '../inscription/user.model';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  listebookOfFireDB;
  indexlast:number;
  username:string;
  imgUser:string;
  constructor( private service: HomeUserService, private cnxrouter:Router,private firestoreBase:LoginServiceFireBase, private authentification:AngularFireAuth)
  { }
  private routevisited:string
  private emailresgitered:any

  //fonction async temp , eventually i place this async temp in service
  private async resolveAsyncUserExist(email){
    const result= await this.firestoreBase.userExist(email)
    this.emailresgitered=result
  }

  ngOnInit() {
    console.log("HOME USER COMPONENT")
    console.log(this.service.getlistUrl())
   
    this.authentification.authState.subscribe((user)=>{
      this.resolveAsyncUserExist(user.email)
if(localStorage.getItem('provider')){
      setTimeout(() => {
        if(this.emailresgitered<1){
          let newuser:UserBooks={

              email:user.email,
              uid:user.uid,
              emailverified:user.emailVerified,
              img:user.photoURL,
              provider:"",
              username:user.displayName

          }
          this.firestoreBase.addUserFireStoreCloud(newuser)
        }
        else{
          console.log("it exist in BD")
        }
        
      }, 500);

    }
      if(user){
        this.username=user.displayName
       // this.firestoreBase.changeTitle().emit(user.email)
        this.username=user.displayName
        this.imgUser=user.photoURL
        if(this.service.getlistUrl().length>0){
          let lastroute= this.service.getlistUrl()[this.service.getlistUrl().length-1]
            this.cnxrouter.navigate([lastroute])
        }
        
      }
      else{
        
        this.cnxrouter.navigate(['/home'])
      }
      
    })
  }
  logout():void{

        this.firestoreBase.signOut()

    }
}
