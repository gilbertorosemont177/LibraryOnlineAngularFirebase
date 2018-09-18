import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

const APIKEY="d3017e2f198c48c89a6b7ea6d93ced4f"
@Injectable()
export class NewYorkService {
    
    private LINKNYSTORIES=`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${APIKEY}`
    constructor(private HttpcnxNY:HttpClient){

    }
    

   public getStoriesNYApi(){
        console.log("stories api")
        let items:any[];
        return this.HttpcnxNY.get(this.LINKNYSTORIES,
            {
             
            headers:({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Methods':" GET, POST, OPTIONS, PUT, DELETE",
            // 'Access-Control-Allow-Headers':" X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization",
            // 'Access-Control-Allow-Origin': "*"

         })
         }
        )
         
        
    }

}