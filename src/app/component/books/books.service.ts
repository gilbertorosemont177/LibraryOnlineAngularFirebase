import { Injectable } from '@angular/core';
import { Books } from './books.interface';
import {LISTEBOOKS  } from "./books.mocks";
import { map, timeInterval } from "rxjs/operators";
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { UserBooks } from '../inscription/user.model';
@Injectable()
export class BooksService {
    private uidUser=(localStorage.getItem('useruid')!=null)? localStorage.getItem('useruid') :null
    resultat:boolean;
    constructor( private fs:AngularFirestore ){}
    
     public getBooks():Promise<Books[]>{
            return new Promise((resolve)=>resolve(LISTEBOOKS));
    }
    public getBook(id:number):Books{
        return LISTEBOOKS.find (b=>b.id===id);
    }
    public getMyLibrary(uid){
   
        return this.fs.collection("usersbooks").doc(uid).collection('mylibrary').snapshotChanges() .pipe<Books[]>(map((objets)=>{
            return objets.map((res)=>({key:res.payload.doc.id,... res.payload.doc.data()}))
        }))


    }
    public getBooksFromFs():Observable<Books[]>{

        return this.fs.collection("books").snapshotChanges() .pipe<Books[]>(map((objets)=>{
            return objets.map((res)=>({key:res.payload.doc.id,... res.payload.doc.data()}))
        }))
    }
    public getUserUID(em){
 
        this.fs.collection('usersbooks').snapshotChanges().pipe(map((res)=>{
            return res.map((action=>({key:action.payload.doc.id,...action.payload.doc.data()})))
                })).subscribe((response)=>{ 
                response.forEach((val,i,arr:any)=>{
                    if(arr[i].email==em){
                        localStorage.setItem('useruid',arr[i].key.toString())
                    }
                })
            })
    }
  
public verifyBookInCollection(titre){
   this.resultat=false
    let verifuid=localStorage.getItem('useruid')
 
        this.fs.collection('usersbooks').doc(verifuid).collection('mylibrary').snapshotChanges().pipe(map((res)=>{
                    return res.map((res)=>({...res.payload.doc.data()}))
            })).subscribe((response)=>{
                    response.forEach((val,i,arr:any)=>{
                        if(arr[i].titre==titre){
                            this.resultat=true
                        }
                       
                        
            })
        })  
}
public changeEtatBook(keyBook:string){


  this.fs.collection('books').doc(keyBook).update({
      disponible:false
  })
              
}
public addInMyLibrarys(b:Books){
    console.log("antes de time out this.resultat ="+this.resultat)
            this.verifyBookInCollection(b.titre)
            setTimeout(()=>{
                console.log("al interior del time out " + this.resultat)
                if(this.resultat==false){
                    let cnxfirecloud=  this.fs.firestore.collection('usersbooks').doc(localStorage.getItem('useruid')).collection('mylibrary')
                    cnxfirecloud.add(b)
                    this.changeEtatBook(b.key)
                    
                }
            
                
                },200)
                console.log("despues de  salir del time out this.resultat ="+this.resultat)
}

        public getBookInfo(bookname:string ): Books []
         {
            let listebooks: Books[]=[]
            for (let book of LISTEBOOKS ){

                let getBookTitre= book.titre.toLowerCase()
                if(getBookTitre.indexOf(bookname)>-1 ){

                    listebooks.push(book)
                }

            }
            return listebooks
        }
}