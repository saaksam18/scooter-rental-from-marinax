import { TestBed } from '@angular/core/testing';

import { ApiserverService } from './apiserver.service';

describe('ApiserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiserverService = TestBed.get(ApiserverService);
    expect(service).toBeTruthy();
  });
});
