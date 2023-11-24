import { Component } from '@angular/core';
import { StudentRatingSortType } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss'],
})
export class RatingPageComponent {
  constructor(private dataService: DataService) {}

  data = {};
  sortType: StudentRatingSortType = 'asc';

  getSortedStudentRating(sortType: StudentRatingSortType) {
    this.dataService
      .getSortedStudentsByRating(sortType as StudentRatingSortType)
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
    this.getSortedStudentRating(this.sortType as StudentRatingSortType);
  }
}
