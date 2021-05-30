import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDashBoardComponent } from './suppliers-dash-board.component';

describe('SuppliersDashBoardComponent', () => {
  let component: SuppliersDashBoardComponent;
  let fixture: ComponentFixture<SuppliersDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
