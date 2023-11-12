import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDebtPageComponent } from './student-debt-page.component';

describe('StudentDebtPageComponent', () => {
  let component: StudentDebtPageComponent;
  let fixture: ComponentFixture<StudentDebtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDebtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDebtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
