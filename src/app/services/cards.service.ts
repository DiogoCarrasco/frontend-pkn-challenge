import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }


  loadCards(): Observable<Card[]> {
    
    const params= new HttpParams()
          .set("page","1")
          .set("PageSize","250");

          return this.http.get<Card[]>(`${this.baseUrl}/cards`)
  }
}
