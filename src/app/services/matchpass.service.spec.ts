import { TestBed } from '@angular/core/testing';

import { MatchpassService } from './matchpass.service';

describe('MatchpassService', () => {
  let service: MatchpassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchpassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
