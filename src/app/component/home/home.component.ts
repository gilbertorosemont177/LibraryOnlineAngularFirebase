import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books/books.service'
import {Books  } from "../books/books.interface";
import {Router  } from "@angular/router";
import { LoginServiceFireBase } from "../login/login.service";
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import { map } from "rxjs/operators";
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
  listbooks:Observable<Books[]>
  constructor(private _sanitizer:DomSanitizer,public afs: AngularFirestore,private servicelogin:LoginServiceFireBase ,private usercnx:AngularFireAuth ,private ListeB:BooksService, private route:Router) {}

  ngOnInit() {
console.log('home para testear storage')
 let test=localStorage.getItem('useruid')
 console.log(test)
  this.listbooks=this.ListeB.getBooksFromFs()


  this.usercnx.authState.subscribe((user)=>{

      if(user && localStorage.length>0){
        this.cnxuser=true
      }
      else{
        this.route.navigate(['/home'])
        this.servicelogin.changeTitle().emit("Se connecter/S'inscrire")
        }
    })

   // this.updateBook()
    
    
  }
infoBookbyId(id:number):void{

      this.route.navigate(['/bookdetail',id])
  }
  getBackground(img){
    return this._sanitizer.bypassSecurityTrustStyle(`url(${img})`);

  }

  addBooksInMyLibrary(b:Books){
    console.log(b)
 this.ListeB.addInMyLibrarys(b)
  }
  private itemsCollection: AngularFirestoreCollection<any>;
    items
    countItems = 0;
  updateBook(){
    this.itemsCollection = this.afs.collection<any>('books');
        this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
          this.countItems = actions.length;
          return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
      })).subscribe((s)=>console.log(s))
            
    }
  

}
