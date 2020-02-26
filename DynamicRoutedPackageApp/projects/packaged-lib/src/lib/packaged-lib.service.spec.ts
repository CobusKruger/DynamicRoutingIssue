import { TestBed } from '@angular/core/testing';

import { PackagedLibService } from './packaged-lib.service';

describe('PackagedLibService', () => {
  let service: PackagedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
