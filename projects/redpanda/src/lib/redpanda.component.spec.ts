import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedpandaComponent } from './redpanda.component';

describe('RedpandaComponent', () => {
  let component: RedpandaComponent;
  let fixture: ComponentFixture<RedpandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedpandaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedpandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
