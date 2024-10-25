import { TestBed } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { provideHttpClient } from '@angular/common/http';
import { IDisco } from '../interfaces/idisco';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AppGlobalConstants } from '../app.constants';

const dummyAlbums: IDisco[] = [
  {
    "id": "1",
    "autor": {
        "id": "1",
        "nombre": "Dover",
        "pais": "Espa\u00f1a",
        "fechaInicio": "1970-01-01"
    },
    "genero": {
        "id": "1",
        "nombre": "ROCK",
        "generoId": "0"
    },
    "nombre": "Devil Came to Me",
    "precio": "22.30",
    "stock": "20",
    "fechaAlta": "2015-02-02",
    "activo": "1",
    "foto": ""
},
{
    "id": "2",
    "autor": {
        "id": "2",
        "nombre": "Nirvana",
        "pais": "E.E.U.U.",
        "fechaInicio": "1970-01-01"
    },
    "genero": {
        "id": "3",
        "nombre": "GRUNGE",
        "generoId": "1"
    },
    "nombre": "Nevermind",
    "precio": "22.30",
    "stock": "20",
    "fechaAlta": "2015-02-02",
    "activo": "1",
    "foto": ""
}
];

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AlbumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request and return albums', () => {
    const start = 0;
    const limit = 5;

    service.get(start,limit).subscribe(data => {
      expect(data).toEqual(dummyAlbums);
    });
    const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + `/discos?_start=${start}&_limit=${limit}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAlbums);
  });

  it('should make a GET request and return album form id', () => {
    const id = "1";
    const dummyAlbum = dummyAlbums.find(a => a.id == id);
    if(dummyAlbum === undefined) { fail(`Album with id ${id} not found`); console.log(dummyAlbums);
     return; }

    service.getOnly(Number(id)).subscribe(data => {
      expect(data).toEqual(dummyAlbum);
    });
    const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + `/discos/${id}?_embed=pistas`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAlbum);
  });

  it('should send album a POST request and return created album', () => {
    let dummyAlbum = {...dummyAlbums[0]};
    dummyAlbum.id = String(dummyAlbums.length + 1);

    service.add(dummyAlbum).subscribe(data => {
      expect(data).toEqual(dummyAlbum);
    });

    const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + `/discos`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyAlbum);
  });

  it('should send album a UPDATE request and return modify album', () => {
    let dummyAlbum = dummyAlbums[0];

    service.update(Number(dummyAlbum.id), dummyAlbum).subscribe(data => {
      expect(data).toEqual(dummyAlbum);
    });

    const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + `/discos/${dummyAlbum.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyAlbum);
  });

  it('should REMOVE album from id', () => {
    let dummyAlbum = dummyAlbums[0];
    
    service.remove(Number(dummyAlbum.id)).subscribe(() => {});

    const req = httpMock.expectOne(AppGlobalConstants.SERVER_API_URL + `/discos/${dummyAlbum.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(dummyAlbum);
  });

  afterEach(() => { httpMock.verify() });
});
