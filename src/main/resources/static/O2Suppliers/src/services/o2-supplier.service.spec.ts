import { TestBed } from '@angular/core/testing';

import { O2SupplierService } from './o2-supplier.service';

describe('O2SupplierService', () => {
  let service: O2SupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(O2SupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
