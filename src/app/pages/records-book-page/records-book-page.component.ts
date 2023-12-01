import { Component } from '@angular/core';
import { RecordsbookSubject } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-records-book-page',
  templateUrl: './records-book-page.component.html',
  styleUrls: ['./records-book-page.component.scss'],
})
export class RecordsBookPageComponent {
  constructor(private dataService: DataService) {}

  data: RecordsbookSubject[] | [] = [];
  email: string | null = sessionStorage.getItem('email');

  onSemesterChange(e: any) {
    this.getStudentRecordsbookSemesterByEmail(
      this.email as string,
      e.target.value
    );
  }

  getStudentRecordsbookSemesterByEmail(email: string, semester: number = 1) {
    this.dataService
      .getStudentRecordsbookSemesterByEmail(email as string, semester)
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
    this.getStudentRecordsbookSemesterByEmail(this.email as string, 2);
  }
}
