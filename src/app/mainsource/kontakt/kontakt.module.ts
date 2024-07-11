import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontaktRoutingModule } from './kontakt.routing.module';
import { KontaktComponent } from './kontakt.component';





@NgModule({
    imports: [
        CommonModule,
        KontaktRoutingModule,
        
        
    ],
    declarations: [KontaktComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [KontaktComponent],
})
export class KontaktModule { }
