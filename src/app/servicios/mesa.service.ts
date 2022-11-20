import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mesa } from '../modelos/mesa.model';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(`${environment.url_gateway}/mesas`);

  }
}
