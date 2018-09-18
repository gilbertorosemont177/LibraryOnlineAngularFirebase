import { Injectable } from '@angular/core';

@Injectable()
export class HomeUserService {

 private nelements:number;
   private listUrl:string[]=[]
   public getlistUrl(){
           
        return this.listUrl
    }
   public saveChildrenUrl(url:string){

        this.listUrl.push(url)
    }
    public clearHistory(){
        this.listUrl=[]
    }
}