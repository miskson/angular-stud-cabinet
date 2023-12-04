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
  currentSemester: number = 1;

  onSemesterChange(e: any) {
    this.getStudyPlanSemesterByEmail(this.email as string, e.target.value);
  }

  async getInitialInfo() {
    await this.getStudentCurrentSemesterByEmail(this.email as string);
    await this.getStudyPlanSemesterByEmail(
      this.email as string,
      this.currentSemester
    );
  }

  getStudentCurrentSemesterByEmail(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dataService.getStudentGeneralInfoByEmail(email as string).subscribe(
        (res) => {
          const { semester } = res[0];
          this.currentSemester = semester;
          resolve();
        },
        (err) => {
          console.error(err, 'Request Error');
          reject(err);
        }
      );
    });
  }

  getStudyPlanSemesterByEmail(
    email: string,
    semester: number = 1
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dataService
        .getStudentStudyPlanSemesterByEmail(email as string, semester)
        .subscribe(
          (res) => {
            this.data = res;
            resolve();
          },
          (err) => {
            console.error(err, 'Request Error');
            reject(err);
          }
        );
    });
  }

  ngOnInit(): void {
    this.getInitialInfo();
  }
}
