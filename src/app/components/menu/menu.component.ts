import { Component } from '@angular/core';
import { SearcherComponent } from '../searcher/searcher.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SearcherComponent,RouterModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private authService: AuthService) { }

  get user(): IUser | undefined {
    return this.authService.user;
  }

  logout(): void {
    this.authService.logout();
  }
}
