import { Component, OnInit } from '@angular/core';
import { HomeUserService } from "../homeuser/homeuser.service";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  valuelast;
  constructor(private ar:ActivatedRoute,private router:Router,private serviceHome:HomeUserService) { 
   
    this.serviceHome.saveChildrenUrl(this.router.url.toString())
    // console.log("thi mybooks component"+this.router.url.toString())
  }

  ngOnInit() {
    this.router.navigate(['./listemybooks'],{relativeTo:this.ar})
    console.log("component my books")
   
   
  }

}
