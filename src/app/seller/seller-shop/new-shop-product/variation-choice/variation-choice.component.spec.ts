import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationChoiceComponent } from './variation-choice.component';

describe('VariationChoiceComponent', () => {
  let component: VariationChoiceComponent;
  let fixture: ComponentFixture<VariationChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariationChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
