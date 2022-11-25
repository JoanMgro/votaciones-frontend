import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ListarResultadosComponent } from './listar-resultados/listar-resultados.component';
import { NbCardModule } from '@nebular/theme';
import { CrearResultadoComponent } from './crear-resultado/crear-resultado.component';
import { FormsModule } from '@angular/forms';
import { ReportarResultadosComponent } from './reportar-resultados/reportar-resultados.component';
import { ChartsModule } from '../charts/charts.module';



@NgModule({
  declarations: [
    ListarResultadosComponent,
    CrearResultadoComponent,
    ReportarResultadosComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    NbCardModule,
    FormsModule,
    ChartsModule
    
  ]
})
export class ResultadosModule { }
