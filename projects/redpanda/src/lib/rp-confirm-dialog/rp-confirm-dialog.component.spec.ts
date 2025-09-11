import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpConfirmDialogComponent } from './rp-confirm-dialog.component';

describe('RpConfirmDialogComponent', () => {
  let component: RpConfirmDialogComponent;
  let fixture: ComponentFixture<RpConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpConfirmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
