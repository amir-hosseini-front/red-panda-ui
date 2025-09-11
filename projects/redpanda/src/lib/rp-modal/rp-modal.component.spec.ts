import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpModalComponent } from './rp-modal.component';

describe('RpModalComponent', () => {
  let component: RpModalComponent;
  let fixture: ComponentFixture<RpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
