import { TestBed } from '@angular/core/testing';

import { WorkspaceLibService } from './workspace-lib.service';

describe('WorkspaceLibService', () => {
  let service: WorkspaceLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
