import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogowanieRoutingModule } from './logowanie.routing.module';
import { LogowanieComponent } from './logowanie.component';





@NgModule({
    imports: [
        CommonModule,
        LogowanieRoutingModule,
        
        
    ],
    declarations: [LogowanieComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [LogowanieComponent],
})
export class LogowanieModule { }
