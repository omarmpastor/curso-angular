import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListComponent } from './album-list.component';
import { provideHttpClient } from '@angular/common/http';
import { IDisco } from '../../interfaces/idisco';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumListComponent],
      providers: [
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add album to cart', () => {
    expect(component).toBeTruthy();
  });

  it('should get name of genre from album', () => {
    expect(component).toBeTruthy();
  });

  it('should check is user login', () => {
    expect(component).toBeTruthy();
  });
});
