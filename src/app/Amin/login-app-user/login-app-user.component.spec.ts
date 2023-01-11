import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAppUserComponent } from './login-app-user.component';

describe('LoginAppUserComponent', () => {
  let component: LoginAppUserComponent;
  let fixture: ComponentFixture<LoginAppUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAppUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
