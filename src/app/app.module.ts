//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { AboutComponent } from './component/about/about.component';
import { BooksComponent } from './component/books/books.component';

//modules
import { MaterialModuleApp } from "./material.module";
import {RoutesAppBooksModule} from './app.routes';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//services
import { BooksService } from "./component/books/books.service";
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent,
    InscriptionComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModuleApp,
    RoutesAppBooksModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
