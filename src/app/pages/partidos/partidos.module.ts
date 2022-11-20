import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';


@NgModule({
  declarations: [
    ListarPartidosComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule
  ]
})
export class PartidosModule { }
