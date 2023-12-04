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
  currentSemester: number = 1;

  onSemesterChange(e: any) {
    this.getStudentRecordsbookSemesterByEmail(
      this.email as string,
      e.target.value
    );
  }

  async getInitialInfo() {
    await this.getStudentCurrentSemesterByEmail(this.email as string);
    await this.getStudentRecordsbookSemesterByEmail(
      this.email as string,
      this.currentSemester
    );

    console.log(this.data, this.currentSemester);
  }

  getStudentCurrentSemesterByEmail(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dataService.getStudentGeneralInfoByEmail(email as string).subscribe(
        (res) => {
          const { semester } = res[0];
          console.log('getStudentCurrentSemesterByEmail', semester);
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

  getStudentRecordsbookSemesterByEmail(
    email: string,
    semester: number = 1
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dataService
        .getStudentRecordsbookSemesterByEmail(email as string, semester)
        .subscribe(
          (res) => {
            this.data = res;
            console.log('getStudentRecordsbookSemesterByEmail', res);
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
