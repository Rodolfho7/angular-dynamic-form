import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentsFormComponent } from './login-components-form.component';

describe('LoginComponentsFormComponent', () => {
  let component: LoginComponentsFormComponent;
  let fixture: ComponentFixture<LoginComponentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
