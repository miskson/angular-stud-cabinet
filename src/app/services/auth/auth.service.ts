import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/auth';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStudentByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/signedStudents?email=${email}`
    );
  }
}
