import { TestBed } from '@angular/core/testing';

import { SellerHomeGuard } from './seller-home.guard';

describe('SellerHomeGuard', () => {
  let guard: SellerHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
