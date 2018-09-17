import { Component, OnInit } from '@angular/core';
import { NewYorkService } from './newyork.service';
import { HomeUserService } from '../homeuser/homeuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newyorkt',
  templateUrl: './newyorkt.component.html',
  styleUrls: ['./newyorkt.component.css']
})
export class NewyorktComponent implements OnInit {

  constructor(private router:Router,private api:NewYorkService,private serviceHome:HomeUserService) { }

  ngOnInit() {

    this.serviceHome.saveChildrenUrl(this.router.url)
    console.log("thi new york component"+this.router.url.toString())
  }

  apis(){

    this.api.getStoriesNYApi()
  }

}
