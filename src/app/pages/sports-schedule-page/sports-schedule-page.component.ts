import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-sports-schedule-page',
  templateUrl: './sports-schedule-page.component.html',
  styleUrls: ['./sports-schedule-page.component.scss'],
})
export class SportsSchedulePageComponent {
  constructor(private dataService: DataService) {}

  data: string[] = [];
  data1 = {};
  email: string | null = sessionStorage.getItem('email');

  getSportsList() {
    this.dataService.getSportsLIst().subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  getSportScheduleByName(sportName: string) {
    this.dataService.getSportScheduleByName(sportName as string).subscribe(
      (res) => {
        this.data1 = res;
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getSportsList();
    this.getSportScheduleByName('Boxing');
  }
}
