import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GeneralPageComponent } from './pages/general-page/general-page.component';
import { RatingPageComponent } from './pages/rating-page/rating-page.component';
import { StudentDebtPageComponent } from './pages/student-debt-page/student-debt-page.component';
import { StudySchedulePageComponent } from './pages/study-schedule-page/study-schedule-page.component';
import { SportsSchedulePageComponent } from './pages/sports-schedule-page/sports-schedule-page.component';
import { StudyPlanPageComponent } from './pages/study-plan-page/study-plan-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RecordsBookPageComponent } from './pages/records-book-page/records-book-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CabinetButtonComponent } from './shared/cabinet-button/cabinet-button.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralPageComponent,
    RatingPageComponent,
    StudentDebtPageComponent,
    StudySchedulePageComponent,
    SportsSchedulePageComponent,
    StudyPlanPageComponent,
    PaymentPageComponent,
    RecordsBookPageComponent,
    NotfoundPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginPageComponent,
    CabinetButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
