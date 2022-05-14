import { TestBed } from '@angular/core/testing';

import { CriptosService } from './criptos.service';

describe('CriptosService', () => {
  let service: CriptosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
