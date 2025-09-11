import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpSpinnerComponent } from './rp-spinner.component';

describe('RpSpinnerComponent', () => {
  let component: RpSpinnerComponent;
  let fixture: ComponentFixture<RpSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
