
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecremComponent } from './secrem.component';

const routes: Routes = [{ path: '', component:  SecremComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecremRoutingModule {}
