import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-study-schedule-page',
  templateUrl: './study-schedule-page.component.html',
  styleUrls: ['./study-schedule-page.component.scss'],
})
export class StudySchedulePageComponent {
  constructor(private dataService: DataService) {}

  data = {};
  email: string | null = sessionStorage.getItem('email');

  getStudentStudySchedule(email: string) {
    this.dataService.getStudentStudyScheduleByEmail(email as string).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentStudySchedule(this.email as string);
  }
}
