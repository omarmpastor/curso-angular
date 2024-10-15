import { Component } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Observable } from 'rxjs';
import { IDisco } from '../../interfaces/idisco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule],
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
}
