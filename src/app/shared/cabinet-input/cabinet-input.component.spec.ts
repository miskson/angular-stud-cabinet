import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetInputComponent } from './cabinet-input.component';

describe('CabinetInputComponent', () => {
  let component: CabinetInputComponent;
  let fixture: ComponentFixture<CabinetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
