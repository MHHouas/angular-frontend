import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private baseURL = "http://localhost:8080/sinistres/photos";

  constructor(private httpClient: HttpClient) { }

  getPhotosList(sinistreId: number): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(`${this.baseURL}/${sinistreId}`);
  }

  uploadPhoto(photo: FormData, sinistreId: number): Observable<HttpResponse<Object>>{
    return this.httpClient.post(`${this.baseURL}/${sinistreId}`,photo,{observe: 'response'});
  }

  deletePhoto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
