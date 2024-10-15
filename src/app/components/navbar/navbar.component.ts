import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../../interfaces/iuser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService) { }

  get user(): IUser | undefined {
    return this.authService.user;
  }

  logout(): void {
    this.authService.logout();
  }
}
