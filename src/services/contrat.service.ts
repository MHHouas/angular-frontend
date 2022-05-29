import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from 'src/models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private baseURL = "http://localhost:8080/contrats";

  constructor(private httpClient: HttpClient) { }
  
  getContratsList(): Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(`${this.baseURL}`);
  }

  createContrat(contrat: Contrat): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, contrat);
  }

  getContratById(id: number): Observable<Contrat>{
    return this.httpClient.get<Contrat>(`${this.baseURL}/${id}`);
  }

  updateContrat(id: number, contrat: Contrat): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, contrat);
  }

  deleteContrat(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
