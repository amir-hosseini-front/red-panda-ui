import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIconComponent } from './component-icon.component';

describe('ComponentIconComponent', () => {
  let component: ComponentIconComponent;
  let fixture: ComponentFixture<ComponentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
