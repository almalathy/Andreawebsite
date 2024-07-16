import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontakComponent } from './kontak.component';

const routes: Routes = [{ path: '', component:  KontakComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontakRoutingModule {}