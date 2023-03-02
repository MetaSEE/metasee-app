import { TestBed } from '@angular/core/testing';

import { VirtualworldsService } from './virtualworlds.service';

describe('VirtualworldsService', () => {
  let service: VirtualworldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualworldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
