import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmnieRoutingModule } from './omnie.routing.module';
import { OmnieComponent } from './omnie.component';





@NgModule({
    imports: [
        CommonModule,
        OmnieRoutingModule,
        
        
    ],
    declarations: [OmnieComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [OmnieComponent],
})
export class OmnieModule { }
