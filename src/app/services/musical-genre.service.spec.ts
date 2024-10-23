import { TestBed } from '@angular/core/testing';

import { MusicalGenreService } from './musical-genre.service';
import { provideHttpClient } from '@angular/common/http';

describe('MusicalGenreService', () => {
  let service: MusicalGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        //provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MusicalGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
