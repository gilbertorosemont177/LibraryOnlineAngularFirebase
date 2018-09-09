import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule  } from "@angular/material/button";
import {MatFormFieldModule,MatInputModule,MatSelectModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
   
    imports: [ MatCardModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatGridListModule
         ],
    exports: [MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule ,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule],
   
})
export class MaterialModuleApp {}

