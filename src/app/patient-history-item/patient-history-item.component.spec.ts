import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoryItemComponent } from './patient-history-item.component';

describe('PatientHistoryItemComponent', () => {
  let component: PatientHistoryItemComponent;
  let fixture: ComponentFixture<PatientHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
