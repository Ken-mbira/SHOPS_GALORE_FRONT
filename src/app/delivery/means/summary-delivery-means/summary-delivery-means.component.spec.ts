import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDeliveryMeansComponent } from './summary-delivery-means.component';

describe('SummaryDeliveryMeansComponent', () => {
  let component: SummaryDeliveryMeansComponent;
  let fixture: ComponentFixture<SummaryDeliveryMeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryDeliveryMeansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDeliveryMeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
