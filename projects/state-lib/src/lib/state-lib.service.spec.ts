import { TestBed } from '@angular/core/testing';

import { StateLibService } from './state-lib.service';

describe('StateLibService', () => {
  let service: StateLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
