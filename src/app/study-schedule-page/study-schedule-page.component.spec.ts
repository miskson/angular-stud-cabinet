import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySchedulePageComponent } from './study-schedule-page.component';

describe('StudySchedulePageComponent', () => {
  let component: StudySchedulePageComponent;
  let fixture: ComponentFixture<StudySchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudySchedulePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudySchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
