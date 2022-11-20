import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ListarCandidatosComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    NbCardModule
  ]
})
export class CandidatosModule { }
