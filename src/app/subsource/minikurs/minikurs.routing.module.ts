import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinikursComponent } from './minikurs.component';

const routes: Routes = [{ path: '', component:  MinikursComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinikursRoutingModule {}