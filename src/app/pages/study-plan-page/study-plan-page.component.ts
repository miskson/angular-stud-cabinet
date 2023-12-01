import { Component } from '@angular/core';
import { StudyPlanSubject } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-study-plan-page',
  templateUrl: './study-plan-page.component.html',
  styleUrls: ['./study-plan-page.component.scss'],
})
export class StudyPlanPageComponent {
  constructor(private dataService: DataService) {}

  data: StudyPlanSubject[] | [] = [];
  email: string | null = sessionStorage.getItem('email');

  onSemesterChange(e: any) {
    this.getStudyPlanSemesterByEmail(this.email as string, e.target.value);
  }

  getStudyPlanSemesterByEmail(email: string, semester: number = 1) {
    this.dataService
      .getStudentStudyPlanSemesterByEmail(email as string, semester)
      .subscribe(
        (res) => {
          this.data = res;
        },
        (err) => {
          console.error(err, 'Request Error');
        }
      );
  }

  ngOnInit(): void {
    this.getStudyPlanSemesterByEmail(this.email as string, 2);
  }
}
