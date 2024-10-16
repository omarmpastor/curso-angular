import { TestBed } from '@angular/core/testing';

import { MusicalGenreService } from './musical-genre.service';

describe('MusicalGenreService', () => {
  let service: MusicalGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicalGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
