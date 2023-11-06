import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsBookPageComponent } from './records-book-page.component';

describe('RecordsBookPageComponent', () => {
  let component: RecordsBookPageComponent;
  let fixture: ComponentFixture<RecordsBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsBookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
