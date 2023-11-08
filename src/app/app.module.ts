import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { StudentDebtPageComponent } from './student-debt-page/student-debt-page.component';
import { StudySchedulePageComponent } from './study-schedule-page/study-schedule-page.component';
import { SportsSchedulePageComponent } from './sports-schedule-page/sports-schedule-page.component';
import { StudyPlanPageComponent } from './study-plan-page/study-plan-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { RecordsBookPageComponent } from './records-book-page/records-book-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GeneralPageComponent,
    RatingPageComponent,
    StudentDebtPageComponent,
    StudySchedulePageComponent,
    SportsSchedulePageComponent,
    StudyPlanPageComponent,
    PaymentPageComponent,
    RecordsBookPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
