import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesaService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-crear-mesa',
  templateUrl: './crear-mesa.component.html',
  styleUrls: ['./crear-mesa.component.scss']
})
export class CrearMesaComponent implements OnInit {

  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;
  laMesa: Mesa = {
    numero: "",
    cantidad_inscritos: ""
 
  } 

  
  constructor(private miServicioMesas: MesaService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if (this.rutaActiva.snapshot.params.id_mesa) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params.id_mesa;
      this.getMesa(this.id_mesa)
    } else {
      this.modoCreacion = true;
    }
  }

  getMesa(id: string) {
    this.miServicioMesas.getMesa(id).
      subscribe(data => {
        this.laMesa = data;
      });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioMesas.crear(this.laMesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'La Mesa ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }


  }

  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioMesas.editar(this.laMesa._id, this.laMesa).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'La Mesa ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }

  }




  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.laMesa.numero=="" || 
       this.laMesa.cantidad_inscritos==""){
        
      return false;
    }else{
      return true;
    }
  }


}
