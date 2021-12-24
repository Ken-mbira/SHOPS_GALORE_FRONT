import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOrdersComponent } from './daily-orders.component';

describe('DailyOrdersComponent', () => {
  let component: DailyOrdersComponent;
  let fixture: ComponentFixture<DailyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
