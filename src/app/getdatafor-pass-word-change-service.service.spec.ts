import { TestBed } from '@angular/core/testing';

import { GetdataforPassWordChangeServiceService } from './getdatafor-pass-word-change-service.service';

describe('GetdataforPassWordChangeServiceService', () => {
  let service: GetdataforPassWordChangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdataforPassWordChangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
