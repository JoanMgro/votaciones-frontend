import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-listar-partidos',
  templateUrl: './listar-partidos.component.html',
  styleUrls: ['./listar-partidos.component.scss']
})
export class ListarPartidosComponent implements OnInit {

  partidos : Partido[];
  nombresColumnas: string[] = ['Nombre', 'Lema', 'Opciones'];
  constructor(private miServicioPartidos: PartidoService, private router: Router) { }

  ngOnInit(): void {
    return this.listar();
  }

  listar(): void {
    this.miServicioPartidos.listar().subscribe(data => {
      this.partidos = data;
    })
  }



 

  eliminar(id:string): void {
    Swal.fire({
      title: 'Eliminar Partido',
      text: "Está seguro que quiere eliminar el Partido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPartidos.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Partido ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
    
  
  agregar(): void {
    this.router.navigate(["pages/partidos/crear"]);
  }

   editar(id:string): void {
    this.router.navigate(["pages/partidos/actualizar/"+id]);
  }


}
