import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationToolComponent } from './pagination-tool.component';

describe('PaginationToolComponent', () => {
  let component: PaginationToolComponent;
  let fixture: ComponentFixture<PaginationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
