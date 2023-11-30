import { Component } from '@angular/core';
import {
  SortTypes,
  SubjectsScheduleInfo,
  WeekDay,
} from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-study-schedule-page',
  templateUrl: './study-schedule-page.component.html',
  styleUrls: ['./study-schedule-page.component.scss'],
})
export class StudySchedulePageComponent {
  constructor(private dataService: DataService) {}

  data: SubjectsScheduleInfo[] | [] = [];
  email: string | null = sessionStorage.getItem('email');

  weekDays: WeekDay[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  getFilteredDataByDay(day: WeekDay): SubjectsScheduleInfo[] {
    if (this.data.length > 0) {
      return this.data.filter((item) => item.day === day);
    }
    return [];
  }

  getSortedDataByClassTime(arr: SubjectsScheduleInfo[], sort: SortTypes = 'asc') {
    return arr.sort((item1, item2): any => {
      if (sort === 'asc') {
        return item1.classTime - item2.classTime;
      }
      return item2.classTime - item1.classTime;
    });
  }

  getStudentStudySchedule(email: string) {
    this.dataService.getStudentStudyScheduleByEmail(email as string).subscribe(
      (res) => {
        this.data = res[0].days;
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
