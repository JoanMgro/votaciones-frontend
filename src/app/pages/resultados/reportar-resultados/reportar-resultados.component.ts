import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesa } from '../../../modelos/mesa.model';
import { Resultado } from '../../../modelos/resultado.model';
import { MesaService } from '../../../servicios/mesa.service';
import { ResultadoService } from '../../../servicios/resultado.service';

@Component({
  selector: 'ngx-reportar-resultados',
  templateUrl: './reportar-resultados.component.html',
  styleUrls: ['./reportar-resultados.component.scss']
})
export class ReportarResultadosComponent implements OnInit {

  listarMesaFlag: boolean = false;
  resultados: Resultado[];
  resultadosMesa: Resultado[];
  resultadosEnMesa: Resultado[];
  mesas: Mesa[];

  id_mesa: string = "";


  nombresColumnas: string[] = ['Candidato', 'Partido', 'Votos'];
  nombresColumnasDos: string[] = ['Numero mesa', 'Votacion'];

  constructor(private miServicioResultados: ResultadoService,
    private miServicioMesas: MesaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    return this.listar();
  }



  listar(): void {
    this.miServicioResultados.listarVotacionTotal().subscribe(data => {

        data.forEach(data => {
        data['partido']= data['candidato']['partido']['nombre'];
        data['candidato'] = data['candidato']['nombre'] + ' ' + data['candidato']['apellido'];

      });
       this.resultados = data;
    });

    this.miServicioResultados.listarParticipacionMesas().subscribe(data => {

      data.forEach(data => {
      data['mesa']= data['mesa']['numero'];
      
    });
     this.resultadosMesa = data;
    });

    this.miServicioMesas.listar().subscribe(data => {

  
     this.mesas = data;
    });

  }

  listarVotosMesa(): void{
    this.listarMesaFlag = false;
    console.log(this.id_mesa);

    this.miServicioResultados.listarVotosMesas(this.id_mesa).subscribe(data => {

      data.forEach(data => {
        console.log(data);
        data['partido']= data['candidato']['partido']['nombre'];
        data['candidato'] = data['candidato']['nombre'] + ' ' + data['candidato']['apellido'];
      
    });
     this.resultadosEnMesa = data;
     this.listarMesaFlag = true;
    });



  }




}
