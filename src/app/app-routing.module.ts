import { ListaComponent } from './lista/lista.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'atualizar',
    component: AtualizarComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
