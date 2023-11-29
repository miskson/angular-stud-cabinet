import { Component } from '@angular/core';
import {
  SortTypes,
  StudentRatingPlace,
} from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss'],
})
export class RatingPageComponent {
  constructor(private dataService: DataService) {}

  data: StudentRatingPlace[] | [] = [];

  userEmail: string | null = sessionStorage.getItem('email');

  sortType: SortTypes = 'asc';

  toggleSortTypeAndSort(): void {
    this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
    this.getSortedStudentRating(this.sortType as SortTypes);
  }

  getSortedStudentRating(sortType: SortTypes) {
    this.dataService
      .getSortedStudentsByRating(sortType as SortTypes)
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
    this.getSortedStudentRating(this.sortType as SortTypes);
  }
}
