import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillIdComponent } from './fill-id.component';

describe('FillIdComponent', () => {
  let component: FillIdComponent;
  let fixture: ComponentFixture<FillIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
