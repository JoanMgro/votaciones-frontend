import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MesaService } from '../../../servicios/mesa.service';
import { Mesa } from '../../../modelos/mesa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar-mesas',
  templateUrl: './listar-mesas.component.html',
  styleUrls: ['./listar-mesas.component.scss']
})
export class ListarMesasComponent implements OnInit {

  mesas : Mesa[];
  nombresColumnas: string[] = ['Numero', 'Cantidad inscritos', 'Opciones'];
  constructor(private miServicioMesas: MesaService, private router: Router) { }

  

  ngOnInit(): void {
    return this.listar();
  }

  listar(): void {
    this.miServicioMesas.listar().subscribe(data => {
    this.mesas = data;
    })
  }

  home(): void {
    this.router.navigate(["pages/administrador/admon"]);

  }

  agregar(): void {
    this.router.navigate(["pages/mesas/crear"]);
  }

  editar(id:string): void {
    this.router.navigate(["pages/mesas/actualizar/"+id]);
  }




  eliminar(id:string): void {
    Swal.fire({
      title: 'Eliminar Mesa',
      text: "Está seguro que quiere eliminar la Mesa?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesas.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'la mesa ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

}
