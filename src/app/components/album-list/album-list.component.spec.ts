import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { AlbumListComponent } from './album-list.component';
import { provideHttpClient } from '@angular/common/http';
import { IDisco } from '../../interfaces/idisco';
import { AlbumService } from '../../services/album.service';
import { CartService } from '../../services/cart.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { routes } from '../../app.routes';
import { provideRouter } from '@angular/router';

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

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let cartService: CartService;
  
  const albumServiceMock = {
    gendre: '',
    get: jasmine.createSpy('get').and.returnValue(of([dummyAlbums[0]])),
    onFilterGeneroEvent$: new EventEmitter<string>(),
    emitFilterGenero: (gendre: string) => {
      albumServiceMock.gendre = gendre;
      albumServiceMock.onFilterGeneroEvent$.emit(gendre);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumListComponent],
      providers: [
        provideHttpClient(),
        provideRouter(routes),
        { provide: AlbumService, useValue: albumServiceMock }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to onFilterGeneroEvent', () => {
    const filterGenre = 'ROCK';
        
    component.ngOnInit();
    albumServiceMock.emitFilterGenero(filterGenre);
    expect(albumServiceMock.gendre).toEqual(filterGenre);
  });

  it('should create cards from albums return album service', () => {
    albumServiceMock.get.and.returnValue(of(dummyAlbums));
    component.ngOnInit();
    expect(albumServiceMock.get).toHaveBeenCalled();
    fixture.detectChanges();

    const albumCards = fixture.debugElement.queryAll(By.css('.card'));
    expect(albumCards.length).toBe(dummyAlbums.length);
  });

  it('should add album to cart', () => {
    const size = cartService.albums.length;
    component.addToCart(dummyAlbums[0]);
    expect(cartService.albums.length).toBe(size + 1);
  });

  it('should get name of genre from album', () => {
    expect(component.getGenre(dummyAlbums[0])).toBe('ROCK');
  });

  it('should check is user login', () => {
    localStorage.clear();
    expect(component.isUserLogin).toBeFalse();
    localStorage.setItem('userLogin', JSON.stringify({ username: 'omar', age: 43 }));
    expect(component.isUserLogin).toBeTruthy();
  });
});
