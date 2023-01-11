import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidCashComponent } from './paid-cash.component';

describe('PaidCashComponent', () => {
  let component: PaidCashComponent;
  let fixture: ComponentFixture<PaidCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
