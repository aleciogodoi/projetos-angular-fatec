

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CepComponent } from './cep/cep.component';
import { DadosComponent } from './dados/dados.component';

const routes: Routes = [
  {path:"dados", component: DadosComponent},
  {path:"cep", component: CepComponent},
  {path: '',   redirectTo: '/dados', pathMatch: 'full' }, // redireciona para dados
  //{ path: '**', component: PaginaNaoEncontradaComponent },  // pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
