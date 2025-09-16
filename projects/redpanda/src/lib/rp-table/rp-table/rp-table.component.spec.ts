import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpTableComponent } from './rp-table.component';

describe('RpTableComponent', () => {
  let component: RpTableComponent;
  let fixture: ComponentFixture<RpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
