
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SegundaComponent } from './segunda/segunda.component';
import { TerceiraComponent } from './terceira/terceira.component';
import { QuartaComponent } from './quarta/quarta.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"11", component: HomeComponent},
  {path:"segunda-pagina", component: SegundaComponent},
  {path:"terceira", component:TerceiraComponent},
  {path:"quarta", component: QuartaComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path:"**", component: PaginaNaoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
