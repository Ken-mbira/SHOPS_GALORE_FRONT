import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVariationFormComponent } from './no-variation-form.component';

describe('NoVariationFormComponent', () => {
  let component: NoVariationFormComponent;
  let fixture: ComponentFixture<NoVariationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoVariationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoVariationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
