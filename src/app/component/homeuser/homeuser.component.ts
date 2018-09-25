import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginServiceFireBase } from "./../login/login.service";
import { Router,ActivatedRoute } from '@angular/router';
import { HomeUserService } from '../homeuser/homeuser.service';

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
  constructor(private aroute:ActivatedRoute, private service: HomeUserService, private cnxrouter:Router,private firestoreBase:LoginServiceFireBase, private authentification:AngularFireAuth)
  { }
  private routevisited:string
  ngOnInit() {
 
    this.authentification.authState.subscribe((user)=>{
      if(user){
        this.username=user.displayName
        this.firestoreBase.changeTitle().emit(user.email)
        this.username=user.displayName
        this.imgUser=user.photoURL
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
