import { Component } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Observable } from 'rxjs';
import { IDisco } from '../../interfaces/idisco';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideMenuComponent
  ],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  albums$!: Observable<IDisco[]>;

  constructor(private albumService: AlbumService) {
    this.albums$ = albumService.get();
  }

  ngOnInit(): void {
    this.albumService.get()
  }

  getGenre(album: IDisco): string {
    if(!Array.isArray(album.genero)) {
      return album.genero.nombre;
    }

    const genres: string[] = album.genero.map(g => g.nombre);

    return genres.length === 0?'-':genres.join(',');
  }
}
