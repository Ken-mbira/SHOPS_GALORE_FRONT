import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductVariationsComponent } from './single-product-variations.component';

describe('SingleProductVariationsComponent', () => {
  let component: SingleProductVariationsComponent;
  let fixture: ComponentFixture<SingleProductVariationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductVariationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
