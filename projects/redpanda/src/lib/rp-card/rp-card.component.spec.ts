import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpCardComponent } from './rp-card.component';

describe('RpCardComponent', () => {
  let component: RpCardComponent;
  let fixture: ComponentFixture<RpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
