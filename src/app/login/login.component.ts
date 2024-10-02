import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

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

  constructor(private authService: AuthService) {}
  
  onSubmit(f: NgForm) {
    this.valideForm = true;
    
    if(f.valid) {
      this.authService.login(f.value.inputUsername, f.value.inputPassword).subscribe({
        next: ok => {
          this.loginError = !ok;
          //console.info(this.authService.user)
        }
      });
    }
  }
}
