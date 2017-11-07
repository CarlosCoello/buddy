import { TestBed, inject } from '@angular/core/testing';

import { RegisterPostService } from './register-post.service';

describe('RegisterPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterPostService]
    });
  });

  it('should be created', inject([RegisterPostService], (service: RegisterPostService) => {
    expect(service).toBeTruthy();
  }));
});
