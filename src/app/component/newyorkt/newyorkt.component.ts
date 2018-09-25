import { Component, OnInit } from '@angular/core';
import { NewYorkService } from './newyork.service';
import { HomeUserService } from '../homeuser/homeuser.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';;
import { nyTimesapiModel,resultsJsonObjet } from './newyortimesapi.model';


@Component({
  selector: 'app-newyorkt',
  templateUrl: './newyorkt.component.html',
  styleUrls: ['./newyorkt.component.css']
})
export class NewyorktComponent implements OnInit {

  stories:Observable<any>
  resultstories$:Observable<resultsJsonObjet[]>
  images:Observable<any[]>
  loadcomplete:boolean=false;

  constructor(private fr:ActivatedRoute,private service: HomeUserService,private router:Router,private apiNy:NewYorkService,private serviceHome:HomeUserService) { 
    this.serviceHome.saveChildrenUrl(this.router.url.toString())
  
  }

  ngOnInit() {
    this.router.navigate(['./newyorkstories'],{relativeTo:this.fr})
   console.log("component neyork times")
  
    this.apiNy.getStoriesNYApi()
    .subscribe((s:any)=>{
      this.stories=s.results
  
      console.log(s.results)
     })
      
    
  }
  


    ApiNyCnx(){

     
    }

}
