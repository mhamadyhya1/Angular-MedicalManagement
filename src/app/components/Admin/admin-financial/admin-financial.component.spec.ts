import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFinancialComponent } from './admin-financial.component';

describe('AdminFinancialComponent', () => {
  let component: AdminFinancialComponent;
  let fixture: ComponentFixture<AdminFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
