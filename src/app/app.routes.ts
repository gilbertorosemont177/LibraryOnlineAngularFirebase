import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent} from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
 import { InscriptionComponent } from './component/inscription/inscription.component';
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';

// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    {path:'home',component:HomeComponent },
    {path:'',pathMatch:'full',redirectTo:'home'},
    { path: 'about', component: AboutComponent },
    {path:'inscription',component:InscriptionComponent},
    {path:'bookdetail/:id',component:BookdetailComponent}
    

    
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

