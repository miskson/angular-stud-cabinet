import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  isSidebarActive: boolean = true;

  data: any = {};

  email: string | null = sessionStorage.getItem('email');

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
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
