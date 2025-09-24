import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserUpdatedIconComponent } from './browser-updated-icon.component';

describe('BrowserUpdatedIconComponent', () => {
  let component: BrowserUpdatedIconComponent;
  let fixture: ComponentFixture<BrowserUpdatedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserUpdatedIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserUpdatedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
