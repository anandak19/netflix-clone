import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninButton } from './signin-button';

describe('SigninButton', () => {
  let component: SigninButton;
  let fixture: ComponentFixture<SigninButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
