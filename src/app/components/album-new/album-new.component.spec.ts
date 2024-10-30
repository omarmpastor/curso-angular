import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumNewComponent } from './album-new.component'
import { provideHttpClient } from '@angular/common/http';

describe('AlbumNewComponent', () => {
  let component: AlbumNewComponent;
  let fixture: ComponentFixture<AlbumNewComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AlbumNewComponent,
      ],
      providers: [
        provideHttpClient(),
      ]
    })

    fixture = TestBed.createComponent(AlbumNewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})