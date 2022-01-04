import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOrderDetailComponent } from './shop-order-detail.component';

describe('ShopOrderDetailComponent', () => {
  let component: ShopOrderDetailComponent;
  let fixture: ComponentFixture<ShopOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOrderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
