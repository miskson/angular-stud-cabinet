import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetButtonComponent } from './cabinet-button.component';

describe('CabinetButtonComponent', () => {
  let component: CabinetButtonComponent;
  let fixture: ComponentFixture<CabinetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
