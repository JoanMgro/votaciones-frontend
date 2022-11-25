import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resultado } from '../modelos/resultado.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Resultado[]>{
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultados`);

  }

  eliminar(id:string){
    return this.http.delete<Resultado>(`${environment.url_gateway}/resultados/eliminar/${id}`);
  } 


  crear(elResultado: Resultado, id_candidato:string, id_mesa:string) {
    return this.http.post(`${environment.url_gateway}/resultados/crear/${id_candidato}/mesa/${id_mesa}`, elResultado);
  }

  getResultado(id: string): Observable<Resultado> {
    return this.http.get<Resultado>(`${environment.url_gateway}/resultados/ver/${id}`);
  }

  
  editar(id:string,id_candidato:string, id_mesa:string ,elResultado: Resultado) {
    return this.http.put(`${environment.url_gateway}/resultados/modificar/${id}/candidato/${id_candidato}/mesa/${id_mesa}`, elResultado);
  }

  listarVotacionTotal(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultados/votos-total-candidatos`);
  }
  listarParticipacionMesas(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultados/participacion-mesa`);
  }

  listarVotosMesas(id: string): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultados/mesa/${id}`);
  }



}
