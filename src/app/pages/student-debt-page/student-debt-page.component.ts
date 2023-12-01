import { Component } from '@angular/core';
import { SortTypes, StudentDebtInfo } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-student-debt-page',
  templateUrl: './student-debt-page.component.html',
  styleUrls: ['./student-debt-page.component.scss'],
})
export class StudentDebtPageComponent {
  constructor(private dataService: DataService) {}

  data: StudentDebtInfo[] | [] = [];
  email: string | null = sessionStorage.getItem('email');

  sortType: SortTypes = 'desc';

  toggleSortTypeAndSort(): void {
    console.log('toggle sort');
    this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
    console.log('type', this.sortType);
    this.getStudentDebtsInfoByEmail(this.email as string, this.sortType);
    console.log(this.data);
  }

  getStudentDebtsInfoByEmail(email: string, sort: SortTypes = 'desc') {
    this.dataService.getStudentDebtsByEmail(email as string, sort).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentDebtsInfoByEmail(this.email as string, this.sortType);
  }
}
