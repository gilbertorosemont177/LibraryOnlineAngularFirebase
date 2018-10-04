import { Component, OnInit } from '@angular/core';
import { HomeUserService } from "../homeuser/homeuser.service";
import { Router,ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { BooksService } from '../books/books.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  valuelast;
  mybooks
  constructor(private _sanitizer:DomSanitizer,private bsrvc:BooksService,private usercnx:AngularFireAuth,private ar:ActivatedRoute,private router:Router,private serviceHome:HomeUserService) { 
   
    this.serviceHome.saveChildrenUrl(this.router.url.toString())
    
  }

  ngOnInit() {
   

    this.usercnx.authState.subscribe((res)=>{

      if(localStorage.getItem('uid')==null){
          this.bsrvc.getUserUID(res.email)
 
        }else{
        console.log('existe deja USERID')
      }



})

setTimeout(() => {
 let uid=localStorage.getItem('useruid')
  this.mybooks=this.bsrvc.getMyLibrary(uid)
}, 500);
  
  }
  getBackground(img){
    return this._sanitizer.bypassSecurityTrustStyle(`url(${img})`);

  }

}
