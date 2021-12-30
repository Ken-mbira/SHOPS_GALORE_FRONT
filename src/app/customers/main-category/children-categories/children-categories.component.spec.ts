import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCategoriesComponent } from './children-categories.component';

describe('ChildrenCategoriesComponent', () => {
  let component: ChildrenCategoriesComponent;
  let fixture: ComponentFixture<ChildrenCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
