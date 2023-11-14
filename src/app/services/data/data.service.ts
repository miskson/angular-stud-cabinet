import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment/environment';
import { Student, StudentGeneralInfo } from 'src/app/interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStudentGeneralInfoByEmail(
    email: string
  ): Observable<StudentGeneralInfo[]> {
    return this.http.get<StudentGeneralInfo[]>(
      `${this.baseUrl}/studentsInfo?email=${email}`
    );
  }
}
