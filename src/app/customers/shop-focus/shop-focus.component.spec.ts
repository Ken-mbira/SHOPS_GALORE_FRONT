import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFocusComponent } from './shop-focus.component';

describe('ShopFocusComponent', () => {
  let component: ShopFocusComponent;
  let fixture: ComponentFixture<ShopFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
