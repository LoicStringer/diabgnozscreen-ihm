import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePatientViewComponent } from './single-patient-view.component';

describe('SinglePatientViewComponent', () => {
  let component: SinglePatientViewComponent;
  let fixture: ComponentFixture<SinglePatientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePatientViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePatientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
