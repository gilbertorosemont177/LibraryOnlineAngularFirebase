import { Component, OnInit } from '@angular/core';
import { HomeUserService } from "../homeuser/homeuser.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  valuelast;
  constructor(private router:Router,private serviceHome:HomeUserService) { 
   
    this.serviceHome.saveChildrenUrl(this.router.url.toString())
    // console.log("thi mybooks component"+this.router.url.toString())
  }

  ngOnInit() {
    
    
   
   
  }

}
