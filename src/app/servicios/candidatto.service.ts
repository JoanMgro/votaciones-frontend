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

  eliminar(id:string){
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidatos/eliminar/${id}`);
  } 

  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidatos/ver/${id}`);
  }

  crear(elCandidato: Candidato) {
    return this.http.post(`${environment.url_gateway}/candidatos/crear`, elCandidato);
  }
  editar(id:string,elCandidato: Candidato) {
    return this.http.put(`${environment.url_gateway}/candidatos/modificar/${id}`, elCandidato);
  }

  asociar(id_candidato:string,id_partido: string) {
    return this.http.put(`${environment.url_gateway}/candidatos/${id_candidato}/partidos/${id_partido}`,'');
  }


}
