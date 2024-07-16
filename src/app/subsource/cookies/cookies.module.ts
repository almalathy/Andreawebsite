import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesRoutingModule } from './cookies.routing.module';
import { CookiesComponent } from './cookies.component';





@NgModule({
    imports: [
        CommonModule,
        CookiesRoutingModule,
        
        
    ],
    declarations: [CookiesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [CookiesComponent],
})
export class CookiesModule { }
