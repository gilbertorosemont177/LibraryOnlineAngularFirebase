import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent} from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
 import { InscriptionComponent } from './component/inscription/inscription.component';
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';
import {SearchbookComponent} from './component/searchbook/searchbook.component'
import {HomeuserComponent  } from "./component/homeuser/homeuser.component";
import {LoginComponent  } from "./component/login/login.component";
import { WaitingComponent } from './component/waiting/waiting.component';

 // import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    {path:'home',component:HomeComponent },
    {path:'',pathMatch:'full',redirectTo:'home'},
    { path: 'about', component: AboutComponent },
    {path:'inscription',component:InscriptionComponent},
    {path:'bookdetail/:id',component:BookdetailComponent},
    {path: 'search/:bookname', component:SearchbookComponent},
    {path:'succes', component:HomeuserComponent},
    {path:'login',component:LoginComponent},
    {path:'waiting',component:WaitingComponent}

    

    
    // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class RoutesAppBooksModule {}

