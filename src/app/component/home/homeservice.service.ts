import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class HomeService {

    constructor(private afc:AngularFirestore){}

        
    getCollectionUsers(){

        //return this.afc.collection('users')
    }



    

}