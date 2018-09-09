import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from "@angular/router";
import {BooksService  } from "./../books/books.service";
import { Books } from "./../books/books.interface";
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  booksinfo:Books;
  constructor( private routerp:ActivatedRoute,private service:BooksService) { 

    
  }

  ngOnInit() {
    this.routerp.params.subscribe(p=>{this.booksinfo= this.service.getBook(+p['id'])})
  }

}
