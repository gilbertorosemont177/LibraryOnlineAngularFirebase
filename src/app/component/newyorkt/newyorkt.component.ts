import { Component, OnInit } from '@angular/core';
import { NewYorkService } from './newyork.service';
import { HomeUserService } from '../homeuser/homeuser.service';
import { Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators'
export interface apiss{

  copyright:string
last_updated:string
num_results:number
results:any[]
section:string
Status:string
}

@Component({
  selector: 'app-newyorkt',
  templateUrl: './newyorkt.component.html',
  styleUrls: ['./newyorkt.component.css']
})
export class NewyorktComponent implements OnInit {

  constructor(private router:Router,private api:NewYorkService,private serviceHome:HomeUserService) { 

    this.serviceHome.saveChildrenUrl(this.router.url.toString())
    console.log("thi new york component"+this.router.url.toString())
  }

  ngOnInit() {

    
  }
variable;
storiesliste:apiss
  apis(){

    this.api.getStoriesNYApi().subscribe((data)=>{
      this.storiesliste=data as apiss
      console.log(this.storiesliste.results[0])
    })
  }

}
