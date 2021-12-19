import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDestinationComponent } from './summary-destination.component';

describe('SummaryDestinationComponent', () => {
  let component: SummaryDestinationComponent;
  let fixture: ComponentFixture<SummaryDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
