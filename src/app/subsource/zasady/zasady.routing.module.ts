import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZasadyComponent } from './zasady.component';

const routes: Routes = [{ path: '', component:  ZasadyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZasadyRoutingModule {}