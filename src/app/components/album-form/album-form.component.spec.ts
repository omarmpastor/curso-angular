import { provideHttpClient } from '@angular/common/http';
import { AlbumFormComponent } from './album-form.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AlbumFormComponent', () => {
  let component: AlbumFormComponent;
  let fixture: ComponentFixture<AlbumFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AlbumFormComponent,
      ],
      providers: [
        provideHttpClient(),
      ]
    })

    fixture = TestBed.createComponent(AlbumFormComponent);
    component = fixture.componentInstance;
  });


    it('should create', () => {
      expect(component).toBeTruthy();
    });

})
