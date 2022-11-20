import { Component, OnInit } from '@angular/core';
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
  constructor(private miServicioCandidatos: CandidattoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioCandidatos.listar().subscribe(data => {
      data.forEach(data => data['partido'] = data['partido']['nombre']);
      this.candidatos = data;
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
