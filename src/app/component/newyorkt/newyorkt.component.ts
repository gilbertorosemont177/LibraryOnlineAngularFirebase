import { Component, OnInit } from '@angular/core';
import { NewYorkService } from './newyork.service';
import { HomeUserService } from '../homeuser/homeuser.service';
import { Router } from '@angular/router';
import { nyTimesapiModel,resultsJsonObjet,multimediaObjet } from './newyortimesapi.model';



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
    this.apiNyTime()
    
  }

storiesliste

 imgs:multimediaObjet[]
  apiNyTime(){
   let result:any
    this.api.getStoriesNYApi().subscribe((reponse)=>{
     
      result=reponse as nyTimesapiModel
      this.storiesliste= new Array(result.results.length)
      for (let index = 0; index < result.results.length; index++) {
            this.storiesliste[index]=result.results[index]
      }
       console.log(this.storiesliste)
    })
  }

}
