import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionType } from '../models/question-type';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {
  private baseUrl = environment.apiUrl 
  constructor(
    private http: HttpClient 
  ) { }

// GET ALL
  getAll(): Observable<QuestionType[]> {
    return this.http.get<QuestionType[]>(`${this.baseUrl}/questionType`);
  }


}
