import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZasadyRoutingModule } from './zasady.routing.module';
import { ZasadyComponent } from './zasady.component';





@NgModule({
    imports: [
        CommonModule,
        ZasadyRoutingModule,
        
        
    ],
    declarations: [ZasadyComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ZasadyComponent],
})
export class ZasadyModule { }
