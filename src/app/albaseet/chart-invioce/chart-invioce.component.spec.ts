import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInvioceComponent } from './chart-invioce.component';

describe('ChartInvioceComponent', () => {
  let component: ChartInvioceComponent;
  let fixture: ComponentFixture<ChartInvioceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartInvioceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartInvioceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
