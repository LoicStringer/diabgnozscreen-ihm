import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesReportComponent } from './diabetes-report.component';

describe('DiabetesReportComponent', () => {
  let component: DiabetesReportComponent;
  let fixture: ComponentFixture<DiabetesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
