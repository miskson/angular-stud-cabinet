import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment/environment';
import {
  SortTypes,
  SportScheduleInfo,
  StudentDebtInfo,
  StudentGeneralInfo,
  StudentPayment,
  StudentRatingPlace,
  StudentRecordsbook,
  StudentStudyPlan,
  StudentStudySchedule,
} from 'src/app/interfaces/data';

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
      `${this.baseUrl}/generalStudentsInfo?ownerEmail=${email}`
    );
  }

  getStudentStudyPlanByEmail(email: string): Observable<StudentStudyPlan[]> {
    return this.http.get<StudentStudyPlan[]>(
      `${this.baseUrl}/studyPlan?ownerEmail=${email}`
    );
  }

  getStudentPaymentInfoByEmail(
    email: string,
    sort: SortTypes = 'desc'
  ): Observable<StudentPayment[]> {
    return this.http.get<StudentPayment[]>(
      `${this.baseUrl}/studentPayments?ownerEmail=${email}&_sort=semester&_order=${sort}`
    );
  }

  getStudentRecordsbookByEmail(
    email: string
  ): Observable<StudentRecordsbook[]> {
    return this.http.get<StudentRecordsbook[]>(
      `${this.baseUrl}/StudentRecordsbook?ownerEmail=${email}`
    );
  }

  getSortedStudentsByRating(
    sortType: 'desc' | 'asc'
  ): Observable<StudentRatingPlace[]> {
    return this.http.get<StudentRatingPlace[]>(
      `${this.baseUrl}/StudentRatingList?_sort=rating&_order=${sortType}`
    );
  }

  getStudentDebtsByEmail(
    email: string,
    sort: SortTypes = 'desc'
  ): Observable<StudentDebtInfo[]> {
    return this.http.get<StudentDebtInfo[]>(
      `${this.baseUrl}/StudentAcademicDebt?ownerEmail=${email}&_sort=semester&_order=${sort}`
    );
  }

  getStudentStudyScheduleByEmail(
    email: string
  ): Observable<StudentStudySchedule[]> {
    return this.http.get<StudentStudySchedule[]>(
      `${this.baseUrl}/StudentStudySchedule?ownerEmail=${email}`
    );
  }

  getSportsLIst(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/SportsList`);
  }

  getSportScheduleByName(sportName: string): Observable<SportScheduleInfo[]> {
    return this.http.get<SportScheduleInfo[]>(
      `${this.baseUrl}/SportSchedule?subject=${sportName}`
    );
  }
}
