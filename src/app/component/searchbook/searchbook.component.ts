import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { BooksService } from '../books/books.service';
import { Books } from '../books/books.interface';
@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  bookresult:Books[];

  constructor(private booksservice:BooksService , private routes:ActivatedRoute) { }

  ngOnInit() {

      this.routes.params.subscribe((result) => {
        this.bookresult=this.booksservice.getBookInfo(result['bookname'])

      } )

  }

}
