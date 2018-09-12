import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books/books.service'
import {Books  } from "../books/books.interface";
import {Router  } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  effetcss:string;
  listebooks:Books[];
  constructor(  private ListeB:BooksService, private route:Router) { 
   console.log("home component")
   this.getAllBooks() 
  }

  ngOnInit() {}

  getAllBooks():Books[]{
  this.ListeB.getBooks().then(result=> this.listebooks = result);

    return this.listebooks;

  }


  infoBookbyId(id:number):void{

      this.route.navigate(['/bookdetail',id])
  }

}
