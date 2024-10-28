import { TestBed } from '@angular/core/testing';
import { MusicalGenreService } from './musical-genre.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { IGenero } from '../interfaces/igenero';
//import { AppGlobalConstants } from '../app.constants';

const dummyGenres: IGenero[] = [
  {
    "id": "1",
    "nombre": "ROCK",
    "generoId": "0"
  },
  {
    "id": "2",
    "nombre": "POP",
    "generoId": "0"
  },
  {
    "id": "3",
    "nombre": "GRUNGE",
    "generoId": "1"
  }
];

describe('MusicalGenreService', () => {
  let service: MusicalGenreService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MusicalGenreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request and return genres', () => {
    service.get().subscribe(data => {
      expect(data).toEqual(dummyGenres);
    });
    //const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + '/generos');
    const req = httpMock.expectOne('http://localhost:4200/db.json');
    expect(req.request.method).toBe('GET');
    req.flush({generos: dummyGenres});
  });

  afterEach(() => { httpMock.verify() });
});
