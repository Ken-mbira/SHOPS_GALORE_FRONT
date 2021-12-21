import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopProductComponent } from './single-shop-product.component';

describe('SingleShopProductComponent', () => {
  let component: SingleShopProductComponent;
  let fixture: ComponentFixture<SingleShopProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShopProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
