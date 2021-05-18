import { TestBed } from '@angular/core/testing';

import { StuAuthguardGuard } from './stu-authguard.guard';

describe('StuAuthguardGuard', () => {
  let guard: StuAuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StuAuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
