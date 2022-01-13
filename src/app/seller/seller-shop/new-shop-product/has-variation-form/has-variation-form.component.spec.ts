import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasVariationFormComponent } from './has-variation-form.component';

describe('HasVariationFormComponent', () => {
  let component: HasVariationFormComponent;
  let fixture: ComponentFixture<HasVariationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasVariationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasVariationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
