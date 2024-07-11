import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmnieComponent } from './omnie.component';

const routes: Routes = [{ path: '', component:  OmnieComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmnieRoutingModule {}
