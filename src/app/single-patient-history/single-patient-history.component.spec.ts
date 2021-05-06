import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePatientHistoryComponent } from './single-patient-history.component';

describe('SinglePatientHistoryComponent', () => {
  let component: SinglePatientHistoryComponent;
  let fixture: ComponentFixture<SinglePatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePatientHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
