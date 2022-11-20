import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ListarMesasComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule,
    NbCardModule
  ]
})
export class MesasModule { }
