import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { TempoComponent } from './tempo/tempo.component';

import { CotacaoService } from './cotacao.service';
import { TempoService } from "./tempo.service";

@NgModule({
  declarations: [
    AppComponent,
    CotacaoComponent,
    TempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CotacaoService, TempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
