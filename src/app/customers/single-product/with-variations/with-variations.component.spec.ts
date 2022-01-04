import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithVariationsComponent } from './with-variations.component';

describe('WithVariationsComponent', () => {
  let component: WithVariationsComponent;
  let fixture: ComponentFixture<WithVariationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithVariationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
