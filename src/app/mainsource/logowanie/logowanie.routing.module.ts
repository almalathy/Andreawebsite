import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogowanieComponent } from './logowanie.component';

const routes: Routes = [{ path: '', component:  LogowanieComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogowanieRoutingModule {}
