import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../../servicios/mesa.service';
import { Mesa } from '../../../modelos/mesa.model';

@Component({
  selector: 'ngx-listar-mesas',
  templateUrl: './listar-mesas.component.html',
  styleUrls: ['./listar-mesas.component.scss']
})
export class ListarMesasComponent implements OnInit {

  mesas : Mesa[];
  nombresColumnas: string[] = ['Numero', 'Cantidad inscritos', 'Opciones'];
  constructor(private miServicioMesas: MesaService) { }

  

  ngOnInit(): void {
    return this.listar();
  }

  listar(): void {
    this.miServicioMesas.listar().subscribe(data => {
    this.mesas = data;
    })
  }

  agregar(): void {
    console.log('agregando nuevo');
  }

  editar(): void {
    console.log('editnado un');
  }

  eliminar(): void {
    console.log('eliminando un');
  }

}
