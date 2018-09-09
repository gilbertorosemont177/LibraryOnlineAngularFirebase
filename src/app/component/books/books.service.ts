import { Injectable } from '@angular/core';
import { Books } from './books.interface';
import {LISTEBOOKS  } from "./books.mocks";


@Injectable()
export class BooksService {

     public getBooks():Promise<Books[]>{

            return new Promise((resolve)=>resolve(LISTEBOOKS));
        }

        public getBook(id:number):Books{
        
            return LISTEBOOKS.find (b=>b.id===id);
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