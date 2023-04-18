import { TestBed } from '@angular/core/testing';

import { AgeCategoriesService } from './age-categories.service';

describe('AgeCategoriesService', () => {
  let service: AgeCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
