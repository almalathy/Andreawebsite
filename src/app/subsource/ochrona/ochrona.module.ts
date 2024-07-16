import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OchronaRoutingModule } from './ochrona.routing.module';
import { OchronaComponent } from './ochrona.component';





@NgModule({
    imports: [
        CommonModule,
        OchronaRoutingModule,
        
        
    ],
    declarations: [OchronaComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [OchronaComponent],
})
export class OchronaModule { }
