import { TestBed, inject } from '@angular/core/testing';

import { CrudServiceService } from './crud-service.service';

describe('CrudServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudServiceService]
    });
  });

  it('should ...', inject([CrudServiceService], (service: CrudServiceService) => {
    expect(service).toBeTruthy();
  }));
});
