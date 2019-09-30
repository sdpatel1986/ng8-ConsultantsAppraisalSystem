import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = environment.apiUrl 
  constructor(
    private http: HttpClient 
  ) { }

// GET ALL
  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}/question`);
  }

}
