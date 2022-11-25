import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';
import { NbCardModule, NbOptionComponent, NbSelectModule } from '@nebular/theme';
import { CrearCandidatoComponent } from './crear-candidato/crear-candidato.component';
import { FormsModule } from '@angular/forms';
import { AsociarPartidoComponent } from './asociar-partido/asociar-partido.component';


@NgModule({
  declarations: [
    ListarCandidatosComponent,
    CrearCandidatoComponent,
    AsociarPartidoComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    NbCardModule,
    FormsModule,
    NbSelectModule
    
  ]
})
export class CandidatosModule { }
