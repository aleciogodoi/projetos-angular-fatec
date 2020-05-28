import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { CepComponent } from './cep/cep.component';


import { HttpClientModule } from '@angular/common/http';
import { DadosService } from './dados.service';

import { CepService  } from './cep.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    CepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [DadosService, CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
