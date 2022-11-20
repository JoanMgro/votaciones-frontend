import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ListarResultadosComponent } from './listar-resultados/listar-resultados.component';


@NgModule({
  declarations: [
    ListarResultadosComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule
  ]
})
export class ResultadosModule { }
