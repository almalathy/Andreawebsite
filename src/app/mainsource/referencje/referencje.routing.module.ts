import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferencjeComponent } from './referencje.component';

const routes: Routes = [{ path: '', component:  ReferencjeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferencjeRoutingModule {}
