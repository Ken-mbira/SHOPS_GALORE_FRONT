import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansListComponent } from './means-list.component';

describe('MeansListComponent', () => {
  let component: MeansListComponent;
  let fixture: ComponentFixture<MeansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeansListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
