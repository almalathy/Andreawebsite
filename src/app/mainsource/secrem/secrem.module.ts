import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecremRoutingModule } from './secrem.routing.module';
import { SecremComponent } from './secrem.component';





@NgModule({
    imports: [
        CommonModule,
        SecremRoutingModule,
        
        
    ],
    declarations: [SecremComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [SecremComponent],
})
export class SecremModule { }
