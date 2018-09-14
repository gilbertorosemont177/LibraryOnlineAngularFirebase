import { Component, OnInit } from '@angular/core';
import { NewYorkService } from './newyork.service';

@Component({
  selector: 'app-newyorkt',
  templateUrl: './newyorkt.component.html',
  styleUrls: ['./newyorkt.component.css']
})
export class NewyorktComponent implements OnInit {

  constructor(private api:NewYorkService) { }

  ngOnInit() {



  }

  apis(){

    this.api.getStoriesNYApi()
  }

}
