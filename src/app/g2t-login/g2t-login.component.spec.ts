import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2tLoginComponent } from './g2t-login.component';

describe('G2tLoginComponent', () => {
  let component: G2tLoginComponent;
  let fixture: ComponentFixture<G2tLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2tLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2tLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
