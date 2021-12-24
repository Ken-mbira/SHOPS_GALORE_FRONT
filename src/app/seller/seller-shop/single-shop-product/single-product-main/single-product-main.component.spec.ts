import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductMainComponent } from './single-product-main.component';

describe('SingleProductMainComponent', () => {
  let component: SingleProductMainComponent;
  let fixture: ComponentFixture<SingleProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
