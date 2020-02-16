import { TestBed } from '@angular/core/testing';

import { ForcaRelativaService } from './forca-relativa.service';

describe('ForcaRelativaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForcaRelativaService = TestBed.get(ForcaRelativaService);
    expect(service).toBeTruthy();
  });
});
