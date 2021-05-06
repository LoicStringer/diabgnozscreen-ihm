import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientViewComponent } from './new-patient-view.component';

describe('NewPatientViewComponent', () => {
  let component: NewPatientViewComponent;
  let fixture: ComponentFixture<NewPatientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPatientViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
