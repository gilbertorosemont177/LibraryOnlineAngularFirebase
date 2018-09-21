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

  stories:any
  images:any

  constructor(private router:Router,private apiNy:NewYorkService,private serviceHome:HomeUserService) { 
    this.serviceHome.saveChildrenUrl(this.router.url.toString())
    
  }

  ngOnInit() {
    this.StoriesapyNyTime()
    
  }

  StoriesapyNyTime():void{
    this.apiNy.getStoriesNYApi().then((response:any)=>{
        this.stories=response
        console.log(this.stories)
        let imgsNyStories=response.map((val,index,arra)=>{
              let imgmedias= arra[index].multimedia.map((va,i,t)=>{
                    return va
              })
              //console.log(imgmedias[3])
          return (imgmedias[3]!=undefined)?imgmedias[3].url:""
        })
        this.images=imgsNyStories
    })
  }
}
