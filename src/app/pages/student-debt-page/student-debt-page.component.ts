import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-student-debt-page',
  templateUrl: './student-debt-page.component.html',
  styleUrls: ['./student-debt-page.component.scss'],
})
export class StudentDebtPageComponent {
  constructor(private dataService: DataService) {}

  data = {};
  email: string | null = sessionStorage.getItem('email');

  getStudentDebtsInfoByEmail(email: string) {
    this.dataService.getStudentDebtsByEmail(email as string).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentDebtsInfoByEmail(this.email as string);
  }
}
