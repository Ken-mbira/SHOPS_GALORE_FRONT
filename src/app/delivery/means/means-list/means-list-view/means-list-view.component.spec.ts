import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansListViewComponent } from './means-list-view.component';

describe('MeansListViewComponent', () => {
  let component: MeansListViewComponent;
  let fixture: ComponentFixture<MeansListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeansListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeansListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
