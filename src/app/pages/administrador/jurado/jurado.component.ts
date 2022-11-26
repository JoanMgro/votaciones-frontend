import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.scss']
})
export class JuradoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resultados(): void{
    this.router.navigate(["pages/resultados/listar"]);
    
  }

  consultar(): void{
    this.router.navigate(["pages/resultados/reportar"]);
    
  }
  logOut(): void {
    localStorage.clear();
    this.router.navigate(["pages/seguridad/login"]);
  }


}
