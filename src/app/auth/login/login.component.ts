import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {

  }
  connexion() {
    console.log(this.email + '  ' + this.password)

    if (this.authService.login(this.email, this.password)) {
      localStorage.setItem('userSession', this.email);

      this.router.navigate(['/home']);
    } else {
      this.password = '';
    }
  }
}
