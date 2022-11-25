import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-admon',
  templateUrl: './admon.component.html',
  styleUrls: ['./admon.component.scss']
})
export class AdmonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  candidatos(): void{
    this.router.navigate(["pages/candidatos/listar"]);

  }

  partidos(): void{
    this.router.navigate(["pages/partidos/listar"]);
    
  }
  mesas(): void{
    this.router.navigate(["pages/mesas/listar"]);
    
  }
  resultados(): void{
    this.router.navigate(["pages/resultados/listar"]);
    
  }

  consultar(): void{
    this.router.navigate(["pages/resultados/reportar"]);
    
  }

}


