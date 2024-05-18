import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Users
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Jobs
  getJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs`);
  }

  getJob(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs/${id}`);
  }

  addJob(job: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobs`, job);
  }

  // Applications
  getApplications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/applications`);
  }

  getApplication(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/applications/${id}`);
  }

  addApplication(application: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/applications`, application);
  }
}