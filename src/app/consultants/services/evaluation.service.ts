import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl = environment.apiUrl 
  constructor(
    private http: HttpClient 
  ) { }

// GET ALL
  getAll(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.baseUrl}/evaluation`);
  }

}
