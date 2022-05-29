import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sinistre } from '../models/Sinistre';

@Injectable({
  providedIn: 'root'
})
export class SinistreService {

  private baseURL = "http://localhost:8080/sinistres";

  constructor(private httpClient: HttpClient) { }
  
  getSinistresList(): Observable<Sinistre[]>{
    return this.httpClient.get<Sinistre[]>(`${this.baseURL}`);
  }

  createSinistre(sinistre: Sinistre): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, sinistre);
  }

  getSinistreById(id: number): Observable<Sinistre>{
    return this.httpClient.get<Sinistre>(`${this.baseURL}/${id}`);
  }

  updateSinistre(id: number, sinistre: Sinistre): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, sinistre);
  }

  deleteSinistre(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
