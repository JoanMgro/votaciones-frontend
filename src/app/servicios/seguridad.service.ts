import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  usr = new BehaviorSubject<Usuario>(new Usuario);

  constructor(private http: HttpClient, private router: Router) { 
    this.verificarSesion();
  }

  public get usuarioSesionActiva(): Usuario {
    return this.usr.value;
  }

  setUsuario(usuarioLogueado: Usuario) {
    this.usr.next(usuarioLogueado);
  }

  getUsuario() {
    return this.usr.asObservable();
  }

  login(usrData: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.url_gateway}/login`, usrData);
  }

  guardarSesion(datosSesion: any) {
    let sesion = localStorage.getItem('sesion');
    let datos: Usuario = {
      _id: datosSesion.user_id,
      token: datosSesion.token,
    };
    localStorage.setItem('sesion', JSON.stringify(datos));
    this.setUsuario(datos);
  }

  logout() {
    localStorage.removeItem('sesion');
    this.setUsuario(new Usuario());
  }

  verificarSesion() {
    let sesion = this.getDatosSesion();
    if(sesion) {
      this.setUsuario(JSON.parse(sesion));
    }
  }

  getDatosSesion() {
    let session = localStorage.getItem('sesion');
    return session
  }
}
