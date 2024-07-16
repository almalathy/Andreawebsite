import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OchronaComponent } from './ochrona.component';

const routes: Routes = [{ path: '', component:  OchronaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OchronaRoutingModule {}