import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpInputComponent } from './rp-input.component';

describe('RpInputComponent', () => {
  let component: RpInputComponent;
  let fixture: ComponentFixture<RpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
