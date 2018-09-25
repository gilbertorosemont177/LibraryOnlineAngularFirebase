import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books/books.service'
import {Books  } from "../books/books.interface";
import {Router  } from "@angular/router";
import { LoginServiceFireBase } from "../login/login.service";
import { AngularFireAuth } from "angularfire2/auth";
import { elementStyleProp } from '@angular/core/src/render3/instructions';
import { HomeService } from './homeservice.service';
interface users{
  email:string
  uid:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  effetcss:string
  cnxuser:boolean
  listebooks:Books[]
  constructor(private srvc:HomeService,private servicelogin:LoginServiceFireBase ,private usercnx:AngularFireAuth ,private ListeB:BooksService, private route:Router) { 
   
   this.getAllBooks() 
   
  }

  ngOnInit() {

    let gt=this.srvc.getCollectionUsers().valueChanges() .forEach((p)=>{
      console.log(p)
    })
   
  
   

    this.usercnx.authState.subscribe((user)=>{

      if(user && localStorage.length>0){
        this.cnxuser=true
      }
      else{
        this.route.navigate(['/home'])
        this.servicelogin.changeTitle().emit("Se connecter/S'inscrire")
        }
    })
    
  }

  getAllBooks():Books[]{
  this.ListeB.getBooks().then(result=> this.listebooks = result);

    return this.listebooks;

  }


  infoBookbyId(id:number):void{

      this.route.navigate(['/bookdetail',id])
  }

}
