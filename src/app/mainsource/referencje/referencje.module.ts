import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencjeRoutingModule } from './referencje.routing.module';
import { ReferencjeComponent } from './referencje.component';





@NgModule({
    imports: [
        CommonModule,
        ReferencjeRoutingModule,
        
        
    ],
    declarations: [ReferencjeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ReferencjeComponent],
})
export class ReferencjeModule { }
