import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { TempoComponent } from './tempo/tempo.component';

const routes: Routes = [
  {path:"cotacao", component: CotacaoComponent},
  {path:"tempo", component: TempoComponent},
  {path: '',   redirectTo: '/cotacao', pathMatch: 'full' }, // redireciona para Cotação
  //{ path: '**', component: PaginaNaoEncontradaComponent },  // pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
