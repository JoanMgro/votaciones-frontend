import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service';

@Component({
  selector: 'ngx-listar-resultados',
  templateUrl: './listar-resultados.component.html',
  styleUrls: ['./listar-resultados.component.scss']
})
export class ListarResultadosComponent implements OnInit {

  resultados: Resultado[];
  nombresColumnas: string[] = ['Candidato', 'Partido', 'Mesa', 'Votos', 'Opciones'];
  constructor(private miServicioResultados: ResultadoService, private router: Router) { }

  ngOnInit(): void {
    return this.listar();
  }

  listar(): void {
    this.miServicioResultados.listar().subscribe(data => {

      data.forEach(data => {
        data['partido']= data['candidato']['partido']['nombre'];
        data['mesa'] = data['mesa']['numero'];
        data['candidato'] = data['candidato']['nombre'] + ' ' + data['candidato']['apellido'];

      });
       this.resultados = data;
    })

  }

   
  agregar(): void {
    this.router.navigate(["pages/resultados/crear"]);
  }

   editar(id:string): void {
    this.router.navigate(["pages/resultados/actualizar/"+id]);
  }

  eliminar(id:string): void {
    Swal.fire({
      title: 'Eliminar Resultado',
      text: "Está seguro que quiere eliminar el Resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioResultados.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Resultado ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
    
  

}
