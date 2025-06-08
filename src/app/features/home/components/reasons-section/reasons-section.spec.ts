import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsSection } from './reasons-section';

describe('ReasonsSection', () => {
  let component: ReasonsSection;
  let fixture: ComponentFixture<ReasonsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
