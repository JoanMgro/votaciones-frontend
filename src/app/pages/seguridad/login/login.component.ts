import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo:string="";
  clave:string="";
  constructor(private miServicioSeguridad : SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login():void{
    console.log("aqui"+this.correo+" contraseña "+this.clave)
    let elUsuario:Usuario={
    correo:this.correo,
    clave:this.clave
    }
    this.miServicioSeguridad.login(elUsuario).subscribe(
    data=>{
    this.router.navigate(['pages/dashboard']);
    this.miServicioSeguridad.guardarSesion(data);
    },
    error=>{
      Swal.fire({
      title: 'Error Login',
      text: error["error"]["message"],
      icon: 'error',
      timer:5000
    });
  }
);  
}
}
