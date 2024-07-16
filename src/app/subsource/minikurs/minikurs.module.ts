import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinikursRoutingModule } from './minikurs.routing.module';
import { MinikursComponent } from './minikurs.component';





@NgModule({
    imports: [
        CommonModule,
        MinikursRoutingModule,
        
        
    ],
    declarations: [MinikursComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [MinikursComponent],
})
export class MinikursModule { }
