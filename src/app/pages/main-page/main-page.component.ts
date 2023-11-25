import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private http: HttpClient, private router: Router) {}

  isSidebarActive: boolean = true;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
