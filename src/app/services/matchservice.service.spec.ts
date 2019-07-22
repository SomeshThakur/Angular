import { TestBed } from '@angular/core/testing';

import { MatchserviceService } from './matchservice.service';

describe('MatchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchserviceService = TestBed.get(MatchserviceService);
    expect(service).toBeTruthy();
  });
});
