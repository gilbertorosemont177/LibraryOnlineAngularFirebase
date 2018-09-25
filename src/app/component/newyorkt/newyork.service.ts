import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { nyTimesapiModel,resultsJsonObjet } from './newyortimesapi.model';
import { tap, delay, map } from 'rxjs/operators';
const APIKEY="c82ea4e172d9471aad4ab75493b83095"
@Injectable()
export class NewYorkService {
    
    private LINKNYSTORIES=`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${APIKEY}`
    constructor(private HttpcnxNY:HttpClient){}
    // method with promise and new york times  api
   public getStoriesNYApi(){
        
    return this.HttpcnxNY.get(this.LINKNYSTORIES)
}

}