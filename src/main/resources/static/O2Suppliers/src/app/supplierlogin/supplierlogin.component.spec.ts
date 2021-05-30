import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierloginComponent } from './supplierlogin.component';

describe('SupplierloginComponent', () => {
  let component: SupplierloginComponent;
  let fixture: ComponentFixture<SupplierloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
