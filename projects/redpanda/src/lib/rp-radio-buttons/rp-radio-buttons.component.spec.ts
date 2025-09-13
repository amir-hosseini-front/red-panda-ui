import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpRadioButtonsComponent } from './rp-radio-buttons.component';

describe('RpRadioButtonsComponent', () => {
  let component: RpRadioButtonsComponent;
  let fixture: ComponentFixture<RpRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpRadioButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
