import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidattoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidato[]>{
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidatos`);
  }

}
