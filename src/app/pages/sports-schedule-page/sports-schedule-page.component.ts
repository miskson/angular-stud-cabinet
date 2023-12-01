import { Component } from '@angular/core';
import { SortTypes, SportScheduleInfo, WeekDay } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-sports-schedule-page',
  templateUrl: './sports-schedule-page.component.html',
  styleUrls: ['./sports-schedule-page.component.scss'],
})
export class SportsSchedulePageComponent {
  constructor(private dataService: DataService) {}

  sports: string[] = [];
  data: SportScheduleInfo[] | [] = [];
  email: string | null = sessionStorage.getItem('email');
  selectedMenu: string = '';
  weekDays: WeekDay[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  async getSportSchedule(e: any) {
    const selectedValue = e.target.textContent.trim();
    await this.getSportScheduleByName(selectedValue);
    this.selectedMenu = selectedValue;
  }

  getSportsList() {
    this.dataService.getSportsLIst().subscribe(
      (res) => {
        this.sports = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  getFilteredDataByDay(day: WeekDay): SportScheduleInfo[] {
    if (this.data.length > 0) {
      return this.data.filter((item) => item.day === day);
    }
    return [];
  }

  getSortedDataByClassTime(arr: SportScheduleInfo[], sort: SortTypes = 'asc') {
    return arr.sort((item1, item2): any => {
      if (sort === 'asc') {
        return item1.classTime - item2.classTime;
      }
      return item2.classTime - item1.classTime;
    });
  }

  getSportScheduleByName(sportName: string) {
    this.dataService.getSportScheduleByName(sportName as string).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getSportsList();
  }
}
