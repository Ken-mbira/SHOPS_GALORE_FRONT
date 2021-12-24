import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShopProductComponent } from './new-shop-product.component';

describe('NewShopProductComponent', () => {
  let component: NewShopProductComponent;
  let fixture: ComponentFixture<NewShopProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShopProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
