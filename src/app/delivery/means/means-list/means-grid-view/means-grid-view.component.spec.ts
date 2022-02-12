import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansGridViewComponent } from './means-grid-view.component';

describe('MeansGridViewComponent', () => {
  let component: MeansGridViewComponent;
  let fixture: ComponentFixture<MeansGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeansGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeansGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
