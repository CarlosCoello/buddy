import { TestBed, inject } from '@angular/core/testing';

import { SearchGetService } from './search-get.service';

describe('SearchGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchGetService]
    });
  });

  it('should be created', inject([SearchGetService], (service: SearchGetService) => {
    expect(service).toBeTruthy();
  }));
});
