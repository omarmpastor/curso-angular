import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailComponent } from './album-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { IDisco } from '../../interfaces/idisco';
import { CartService } from '../../services/cart.service';
import { AlbumService } from '../../services/album.service';
import { of } from 'rxjs';

const dummyAlbum: IDisco =
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
};

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let cartService: CartService;
  let albumServiceSpy: jasmine.SpyObj<AlbumService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj<AlbumService>(['getOnly']);

    await TestBed.configureTestingModule({
      imports: [
        AlbumDetailComponent,
      ],
      providers: [
        provideHttpClient(),
        provideRouter(routes),
        {provide: AlbumService, useValue: spy}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    
    cartService = TestBed.inject(CartService);
    albumServiceSpy = TestBed.inject(AlbumService) as jasmine.SpyObj<AlbumService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show album get from service by id', () => {
    albumServiceSpy.getOnly.and.returnValue(of(dummyAlbum));
    component.ngOnInit();
    expect(albumServiceSpy.getOnly).toHaveBeenCalled();
    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement.querySelector('[data-test-id="album-detail-id"]');
    expect(element).toBeTruthy();
  });

  it('should add album to cart', () => {
    const size = cartService.albums.length;
    component.addToCart(dummyAlbum);
    expect(cartService.albums.length).toBe(size + 1);
  });

  it('should get name of genre from album', () => {
    expect(component.getGenre(dummyAlbum)).toBe('ROCK');
  });

  it('should check is user login', () => {
    localStorage.clear();
    expect(component.isUserLogin).toBeFalse();
    localStorage.setItem('userLogin', JSON.stringify({ username: 'omar', age: 43 }));
    expect(component.isUserLogin).toBeTruthy();
  });
});
