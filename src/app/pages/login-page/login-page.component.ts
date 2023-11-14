import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CabinetButtonComponent } from 'src/app/shared/cabinet-button/cabinet-button.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [CabinetButtonComponent, ReactiveFormsModule],
})
export class LoginPageComponent {
  login: FormGroup | any;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  loginUser(login: FormGroup) {
    const { email, password } = this.login.value;
    this.authService.getStudentByEmail(email as string).subscribe(
      (res) => {
        if (res.length > 0 && res[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['student/general-info']);
          this.login.reset();
        } else {
          alert('USER NOT FOUND');
          this.router.navigate(['login']);
        }
      },
      (err) => {
        alert('RequestError: something went wrong');
      }
    );
  }
}
