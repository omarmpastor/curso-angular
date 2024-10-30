import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AppGlobalConstants } from '../app.constants';
import { IAutor } from '../interfaces/iautor';
import { AuthorService } from './author.service';

const dummyGenres: IAutor[] = [
  {
    "id": "1",
    "nombre": "Dover",
    "pais": "Espa\u00f1a",
    "fechaInicio": "1970-01-01"
  },
  {
    "id": "2",
    "nombre": "Nirvana",
    "pais": "E.E.U.U.",
    "fechaInicio": "1970-01-01"
  },
  {
    "id": "3",
    "nombre": "Bruce Springsteen",
    "pais": "E.E.U.U.",
    "fechaInicio": "1970-01-01"
  }
];

describe('AuthorServiceService', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request and return genres', () => {
    service.get().subscribe(data => {
      expect(data).toEqual(dummyGenres);
    });
    //const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + '/autores');
    const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL);
    expect(req.request.method).toBe('GET');
    req.flush({ autores: dummyGenres });
  });

  afterEach(() => { httpMock.verify() });
});
