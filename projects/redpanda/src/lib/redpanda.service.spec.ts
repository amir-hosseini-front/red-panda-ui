import { TestBed } from '@angular/core/testing';

import { RedpandaService } from './redpanda.service';

describe('RedpandaService', () => {
  let service: RedpandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedpandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
