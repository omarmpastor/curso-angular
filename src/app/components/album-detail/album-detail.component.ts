import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IDisco } from '../../interfaces/idisco';
import { AlbumService } from '../../services/album.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album$!: Observable<IDisco>;
  amountToAddCart: number = 1;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cartService: CartService,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.album$ = this.albumService.getOnly(Number(params.get('id')));
    });
  }

  getGenre(album: IDisco): string {
    if(!Array.isArray(album.genero)) {
      return album.genero.nombre;
    }

    const genres: string[] = album.genero.map(g => g.nombre);

    return genres.length === 0?'-':genres.join(',');
  }

  addToCart(album: IDisco) {
    this.cartService.add(album, this.amountToAddCart);
    this.amountToAddCart = 1;
  }

  get isUserLogin(): boolean {
    return this.authService.user !== undefined;
  }

}
