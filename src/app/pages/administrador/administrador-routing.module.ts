import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmonComponent } from './admon/admon.component';
import { JuradoComponent } from './jurado/jurado.component';

const routes: Routes = [
  {
    path: 'admon',
    component: AdmonComponent
  },
  {
    path: 'jurado',
    component: JuradoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
