import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  rol:string="";
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
    console.log(data);
    this.rol= this.getDecodedAccessToken(data['token']);
    this.rol= this.rol['sub']['rol']['nombre'];
    console.log(this.rol);

    if(this.rol === "ciudadano"){
      console.log('hello cuidadano');
      this.router.navigate(['pages/resultados/reportar']);
    }

    if(this.rol === "administrador"){
      console.log('hello');
      this.router.navigate(['pages/administrador/admon']);

    }
    if(this.rol === "jurado"){
      console.log('hello jurado');
      this.router.navigate(['pages/administrador/jurado']);

    }
    
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

getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
  } catch(Error) {
    return null;
  }
}
}
