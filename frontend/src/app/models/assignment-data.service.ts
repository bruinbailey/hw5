import { Injectable } from '@angular/core';
import { Course } from './Course';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from './Assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  constructor(private http: HttpClient) { }

  url= 'v1/courses';
  getAssignments(section: string): Observable<Assignment[]> {
    const url = `${this.url}/${section}`;
    return this.http.get<Assignment[]>(`${this.url}/${section}/assignments`);
  }

  getAssignment(section: string, name: string): Observable<Assignment> {
    const url = `${this.url}/${section}/${name}`;
    return this.http.get<Assignment>(`${this.url}/${section}/assignments/${name}`);
  }

}
