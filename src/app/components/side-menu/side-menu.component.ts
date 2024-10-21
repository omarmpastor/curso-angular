import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../../interfaces/iuser';
import { AuthService } from '../../services/auth.service';
import { MusicalGenreService } from '../../services/musical-genre.service';
import { Observable } from 'rxjs';
import { IGenero } from '../../interfaces/igenero';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  genres$!: Observable<IGenero[]>;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private albumService: AlbumService,
    musicalGenreService: MusicalGenreService
  ) {
    this.genres$ = musicalGenreService.get();
  }

  get user(): IUser | undefined {
    return this.authService.user;
  }

  get amountcartItems(): number {
    return this.cartService.albums.length;
  }

  logout(): void {
    this.authService.logout();
  }

  filterGendre(gendre: string): void {
    this.albumService.emitFilterGenero(gendre);
  }
}
