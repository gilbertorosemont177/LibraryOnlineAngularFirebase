import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { BooksService } from '../books/books.service';
import { Books } from '../books/books.interface';
@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  bookresult:Books[];
  bookname:string;

  constructor(private booksservice:BooksService , private param:ActivatedRoute, private route:Router) { }

  ngOnInit() {

      this.param.params.subscribe((result) => {
        this.bookname=result['bookname']
        this.bookresult=this.booksservice.getBookInfo(result['bookname'])

      } )

  }

  infoBookbyId(id:number){

    this.route.navigate(['/bookdetail',id])
  }

}
