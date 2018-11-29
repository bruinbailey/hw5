import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from './Assignments';
import { Submission } from './Submission';

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  constructor(private http: HttpClient) { }

  url= 'v1/courses';
  getAssignments(section: string): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.url}/${section}/assignments`);
  }

  getAssignment(section: string, name: string): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.url}/${section}/assignments/${name}`);
  }

  submitAssignment(section: String, name: String, sub: Submission): Observable<any> {
    return this.http.post<Submission>(`${this.url}/${section}/assignments/${name}/grades`, sub);
  }

}
