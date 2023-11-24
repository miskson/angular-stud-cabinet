import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-records-book-page',
  templateUrl: './records-book-page.component.html',
  styleUrls: ['./records-book-page.component.scss'],
})
export class RecordsBookPageComponent {
  constructor(private dataService: DataService) {}

  data = {};
  email: string | null = sessionStorage.getItem('email');

  getStudentRecordsbookInfoByEmail(email: string) {
    this.dataService.getStudentRecordsbookByEmail(email as string).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentRecordsbookInfoByEmail(this.email as string);
  }
}
