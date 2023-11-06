import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsSchedulePageComponent } from './sports-schedule-page.component';

describe('SportsSchedulePageComponent', () => {
  let component: SportsSchedulePageComponent;
  let fixture: ComponentFixture<SportsSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsSchedulePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
