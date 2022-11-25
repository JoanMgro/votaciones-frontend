import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { Mesa } from '../../../modelos/mesa.model';
import { Resultado } from '../../../modelos/resultado.model';
import { CandidattoService } from '../../../servicios/candidatto.service';
import { MesaService } from '../../../servicios/mesa.service';
import { ResultadoService } from '../../../servicios/resultado.service';

@Component({
  selector: 'ngx-crear-resultado',
  templateUrl: './crear-resultado.component.html',
  styleUrls: ['./crear-resultado.component.scss']
})
export class CrearResultadoComponent implements OnInit {

  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;

  candidatos: Candidato[] = [];
  mesas : Mesa[] =[];
  id_mesa:string ="";
  id_candidato:string ="";

  elResultado: Resultado = {
    votos: null,  

  } 

  constructor(private miServicioResultados: ResultadoService,
    private miServicioCandidatos: CandidattoService,
    private miServicioMesas: MesaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_resultado) {
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.listarElementos();
      this.getResultado(this.id_resultado)
    } else {
      this.modoCreacion = true;
      this.listarElementos();

    }
  }

  listarElementos(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      this.candidatos = data;
    });
    this.miServicioMesas.listar().subscribe(data2 => {
      this.mesas = data2;
    });

  }

  getResultado(id: string) {
    this.miServicioResultados.getResultado(id).
      subscribe(data => {
        
        this.elResultado.votos= data.votos;
        
        this.id_candidato= data['candidato']['_id'];
        
        this.id_mesa= data['mesa']['_id'];
      });

  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioResultados.crear(this.elResultado, this.id_candidato, this.id_mesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El Resultado ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/resultados/listar"]);
        });
    }

   


  }

  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioResultados.editar(this.id_resultado, this.id_candidato, this.id_mesa,this.elResultado).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El Resultado ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/resultados/listar"]);
        });
    }

  }




  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elResultado.votos== null || 
       this.id_candidato==""){
       console.log('estoy aca');         
      return false;
    }else{
      return true;
    }
  }

}
