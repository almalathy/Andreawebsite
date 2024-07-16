import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontakRoutingModule } from './kontak.routing.module';
import { KontakComponent } from './kontak.component';





@NgModule({
    imports: [
        CommonModule,
        KontakRoutingModule,
        
        
    ],
    declarations: [KontakComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [KontakComponent],
})
export class KontakModule { }
