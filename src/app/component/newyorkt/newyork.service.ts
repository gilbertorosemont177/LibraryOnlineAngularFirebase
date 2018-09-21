import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const APIKEY="d3017e2f198c48c89a6b7ea6d93ced4f"
@Injectable()
export class NewYorkService {
    
    private LINKNYSTORIES=`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${APIKEY}`
    constructor(private HttpcnxNY:HttpClient){}
    // method with promise and new york times  api
   public getStoriesNYApi(): Promise<any[]>{
        
    let resultPromise:Promise<any[]>= new Promise((resolve,reject)=>{
        this.HttpcnxNY.get(this.LINKNYSTORIES, {
            headers :({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
            })        
        }).subscribe((result:any)=>{
                let responsetab=result.results.map((value)=>{
                    return value
                })

            resolve(responsetab)  
        })

    })
     return resultPromise    
        
    }

}