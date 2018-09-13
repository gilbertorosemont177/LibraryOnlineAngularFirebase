import { Component, OnInit } from '@angular/core';
import { LoginServiceFireBase } from '../login/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','../../animate.sheet.css']
})
export class AboutComponent implements OnInit {

  constructor(private cnx:LoginServiceFireBase) { }

  ngOnInit() {
    if(localStorage.length<0){
      this.cnx.changeTitle().emit("Se connecter/S'inscrire")
    }
  }

}
