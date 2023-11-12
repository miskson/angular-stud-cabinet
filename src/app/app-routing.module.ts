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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { component: LoginPageComponent, path: 'login' },
  { component: GeneralPageComponent, path: 'general-info' },
  { component: RecordsBookPageComponent, path: 'recordsbook' },
  { component: RatingPageComponent, path: 'rating' },
  { component: StudentDebtPageComponent, path: 'student-debt' },
  { component: StudySchedulePageComponent, path: 'study-schedule' },
  { component: SportsSchedulePageComponent, path: 'sports-schedule' },
  { component: StudyPlanPageComponent, path: 'study-plan' },
  { component: PaymentPageComponent, path: 'payment' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
