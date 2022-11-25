import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model';
import { CandidattoService } from '../../../servicios/candidatto.service';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-asociar-partido',
  templateUrl: './asociar-partido.component.html',
  styleUrls: ['./asociar-partido.component.scss']
})
export class AsociarPartidoComponent implements OnInit {

  id_candidato: string ="";
  id_partido: string ="";
  partidos :Partido[];
  nombresColumnas: string[] = ['Nombre', 'Lema', 'Opciones'];

  constructor(private miServicioCandidatos: CandidattoService, 
    private miServicioPartidos: PartidoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
    return this.listar();
  }

  listar(): void {
    this.miServicioPartidos.listar().subscribe(data => {
      this.partidos = data;
    })
  }

  asociar(id:string): void{
    this.miServicioCandidatos.asociar(this.id_candidato, id).subscribe(
      data => {
        Swal.fire(
          'Asociado',
          'El Partido ha sido asociado correctamente',
          'success'
        );
        this.router.navigate(["pages/candidatos/listar"])

      }
    );


  }

}
