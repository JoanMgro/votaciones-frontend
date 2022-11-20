import { TestBed } from '@angular/core/testing';

import { CandidattoService } from './candidatto.service';

describe('CandidattoService', () => {
  let service: CandidattoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidattoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
