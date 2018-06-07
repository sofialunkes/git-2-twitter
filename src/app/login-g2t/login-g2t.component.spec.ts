import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginG2tComponent } from './login-g2t.component';

describe('LoginG2tComponent', () => {
  let component: LoginG2tComponent;
  let fixture: ComponentFixture<LoginG2tComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginG2tComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginG2tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
