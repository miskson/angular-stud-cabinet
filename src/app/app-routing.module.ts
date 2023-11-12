import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralPageComponent } from './pages/general-page/general-page.component';
import { RecordsBookPageComponent } from './pages/records-book-page/records-book-page.component';
import { RatingPageComponent } from './pages/rating-page/rating-page.component';
import { StudentDebtPageComponent } from './pages/student-debt-page/student-debt-page.component';
import { StudySchedulePageComponent } from './pages/study-schedule-page/study-schedule-page.component';
import { SportsSchedulePageComponent } from './pages/sports-schedule-page/sports-schedule-page.component';
import { StudyPlanPageComponent } from './pages/study-plan-page/study-plan-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { component: LoginPageComponent, path: 'login' },
  {
    component: GeneralPageComponent,
    path: 'general-info',
    canActivate: [authGuard],
  },
  {
    component: RecordsBookPageComponent,
    path: 'recordsbook',
    canActivate: [authGuard],
  },
  { component: RatingPageComponent, path: 'rating', canActivate: [authGuard] },
  {
    component: StudentDebtPageComponent,
    path: 'student-debt',
    canActivate: [authGuard],
  },
  {
    component: StudySchedulePageComponent,
    path: 'study-schedule',
    canActivate: [authGuard],
  },
  {
    component: SportsSchedulePageComponent,
    path: 'sports-schedule',
    canActivate: [authGuard],
  },
  {
    component: StudyPlanPageComponent,
    path: 'study-plan',
    canActivate: [authGuard],
  },
  {
    component: PaymentPageComponent,
    path: 'payment',
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
  { component: NotfoundPageComponent, path: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
