import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-study-plan-page',
  templateUrl: './study-plan-page.component.html',
  styleUrls: ['./study-plan-page.component.scss'],
})
export class StudyPlanPageComponent {
  constructor(private dataService: DataService) {}

  data = {};
  email: string | null = sessionStorage.getItem('email');

  getStudyPlanByEmail(email: string) {
    this.dataService.getStudentStudyPlanByEmail(email as string).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudyPlanByEmail(this.email as string);
  }
}
