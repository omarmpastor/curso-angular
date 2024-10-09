import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  valideForm: boolean = false;
  loginError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  onSubmit(f: NgForm) {
    this.valideForm = true;
    
    if(f.valid) {
      this.authService.login(f.value.inputUsername, f.value.inputPassword).subscribe({
        next: ok => {
          this.loginError = !ok;
          this.router.navigate(['/']);
        }
      });
    }
  }
}
