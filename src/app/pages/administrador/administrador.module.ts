import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';

import { JuradoComponent } from './jurado/jurado.component';
import { NbCardModule } from '@nebular/theme';
import { AdmonComponent } from './admon/admon.component';


@NgModule({
  declarations: [
    
    JuradoComponent,
    AdmonComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    NbCardModule
  ]
})
export class AdministradorModule { }
