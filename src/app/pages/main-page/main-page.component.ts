import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

interface TabsLinks {
  [key: string]: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private router: Router, private dataService: DataService) {}

  isSidebarActive: boolean = true;

  screenWidth: number = window.innerWidth;

  data: any = {};

  email: string | null = sessionStorage.getItem('email');

  tabs: string[] = [
    'General Info',
    'Recordsbook',
    'Rating',
    'Academic Debt',
    'Study Schedule',
    'Sports Schedule',
    'Study Plan',
    'Study Payment',
  ];

  tabsLinks: TabsLinks = {
    GeneralInfo: 'general-info',
    Recordsbook: 'recordsbook',
    Rating: 'rating',
    AcademicDebt: 'student-debt',
    StudySchedule: 'study-schedule',
    SportsSchedule: 'sports-schedule',
    StudyPlan: 'study-plan',
    StudyPayment: 'payment',
  };

  getStudentBioByEmail(email: string) {
    this.dataService.getStudentGeneralInfoByEmail(email as string).subscribe(
      (res) => {
        const { ownerEmail, name, surname } = res[0];
        this.data = {
          studentEmail: ownerEmail,
          studentName: name,
          studentSurname: surname,
        };
      },
      (err) => {
        console.error(err, 'Request Error');
      }
    );
  }

  ngOnInit(): void {
    this.getStudentBioByEmail(this.email as string);
    console.log('thisScreen width', this.screenWidth);
    this.screenWidth < 768
      ? (this.isSidebarActive = false)
      : (this.isSidebarActive = true);
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
