import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';
import { NbCardModule } from '@nebular/theme';
import { CrearPartidoComponent } from './crear-partido/crear-partido.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarPartidosComponent,
    CrearPartidoComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class PartidosModule { }
