import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutVariationsComponent } from './without-variations.component';

describe('WithoutVariationsComponent', () => {
  let component: WithoutVariationsComponent;
  let fixture: ComponentFixture<WithoutVariationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutVariationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
