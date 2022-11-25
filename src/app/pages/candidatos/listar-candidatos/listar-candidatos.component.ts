import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidattoService } from '../../../servicios/candidatto.service';

@Component({
  selector: 'ngx-listar-candidatos',
  templateUrl: './listar-candidatos.component.html',
  styleUrls: ['./listar-candidatos.component.scss']
})
export class ListarCandidatosComponent implements OnInit {

  candidatos : Candidato[];
  nombresColumnas: string[] = ['Cedula', 'Nombre', 'Apellido', 'Numero Resolucion', 'Partido', 'Opciones'];
  constructor(private miServicioCandidatos: CandidattoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      data.forEach(data => {
        if(data['partido']!=null){
          data['partido'] = data['partido']['nombre']
        }
        else{
          data['partido'] = null;
        }
        

      });
        
      this.candidatos = data;
    })
  }

  home():void {
    this.router.navigate(["pages/administrador/admon"]);
  }

  agregar(): void {
    this.router.navigate(["pages/candidatos/crear"]);
  }

  editar(id:string): void {
    this.router.navigate(["pages/candidatos/actualizar/"+id]);
  }

  eliminar(id:string): void {
    Swal.fire({
      title: 'Eliminar Candidato',
      text: "Está seguro que quiere eliminar el Candidato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioCandidatos.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Candidato ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

  asociar(id:string):void{
    this.router.navigate(["pages/candidatos/asociar/"+ id]);
  }

}
