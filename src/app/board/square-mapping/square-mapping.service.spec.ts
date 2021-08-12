import { TestBed } from '@angular/core/testing';

import { SquareMappingService } from './square-mapping.service';

describe('SquareMappingService', () => {
  let service: SquareMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquareMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
