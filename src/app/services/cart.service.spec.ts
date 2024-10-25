import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { IDisco } from '../interfaces/idisco';

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

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add album to card', () => {
    const size = service.albums.length;
    service.add(dummyAlbums[0]);
    expect(service.albums.length).toBe(size + 1);
  });

  it('should remove album from card', () => {
    service.albums.push(dummyAlbums[0]);
    const size = service.albums.length;
    service.remove(dummyAlbums[0]);
    expect(service.albums.length).toBe(size - 1);
  });

});
