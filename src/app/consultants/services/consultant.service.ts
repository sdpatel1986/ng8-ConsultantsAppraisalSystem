import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultant } from '../models/consultant';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private baseUrl = environment.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  // GET ALL
  getAll(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(`${this.baseUrl}/consultant`);
  }

  // GET BY ID
  getByID(id: any): Observable<Consultant> {
    return this.http.get<Consultant>(`${this.baseUrl}/consultant/${id}`);
  }

  // GET BY ID
  evaluateConsultant(id: any, evaluation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/consultant/${id}/evaluation`, evaluation);
  }



}
