import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateLayoutComponent } from './layout/template-layout/template-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/secrem' },
      {
        path: 'secrem',
        loadChildren: () =>
          import('./mainsource/secrem/secrem.module').then(
            (m) => m.SecremModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/kontakt' },
      {
        path: 'kontakt',
        loadChildren: () =>
          import('./mainsource/kontakt/kontakt.module').then(
            (m) => m.KontaktModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/logowanie' },
      {
        path: 'logowanie',
        loadChildren: () =>
          import('./mainsource/logowanie/logowanie.module').then(
            (m) => m.LogowanieModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/omnie' },
      {
        path: 'omnie',
        loadChildren: () =>
          import('./mainsource/omnie/omnie.module').then(
            (m) => m.OmnieModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/referencje' },
      {
        path: 'referencje',
        loadChildren: () =>
          import('./mainsource/referencje/referencje.module').then(
            (m) => m.ReferencjeModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/cookies' },
      {
        path: 'cookies',
        loadChildren: () =>
          import('./subsource/cookies/cookies.module').then(
            (m) => m.CookiesModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/kontak' },
      {
        path: 'kontak',
        loadChildren: () =>
          import('./subsource/kontak/kontak.module').then(
            (m) => m.KontakModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/minikurs' },
      {
        path: 'minikurs',
        loadChildren: () =>
          import('./subsource/minikurs/minikurs.module').then(
            (m) => m.MinikursModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/ochrona' },
      {
        path: 'ochrona',
        loadChildren: () =>
          import('./subsource/ochrona/ochrona.module').then(
            (m) => m.OchronaModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/zasady' },
      {
        path: 'zasady',
        loadChildren: () =>
          import('./subsource/zasady/zasady.module').then(
            (m) => m.ZasadyModule
          ),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
