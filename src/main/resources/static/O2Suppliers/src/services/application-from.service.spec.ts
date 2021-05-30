import { TestBed } from '@angular/core/testing';

import { ApplicationFromService } from './application-from.service';

describe('ApplicationFromService', () => {
  let service: ApplicationFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
