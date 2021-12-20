import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeliveryMeansComponent } from './new-delivery-means.component';

describe('NewDeliveryMeansComponent', () => {
  let component: NewDeliveryMeansComponent;
  let fixture: ComponentFixture<NewDeliveryMeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeliveryMeansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeliveryMeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
