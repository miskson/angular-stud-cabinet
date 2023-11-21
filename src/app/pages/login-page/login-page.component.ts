import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CabinetButtonComponent } from 'src/app/shared/cabinet-button/cabinet-button.component';
import { CabinetInputComponent } from 'src/app/shared/cabinet-input/cabinet-input.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [CabinetInputComponent, CabinetButtonComponent, ReactiveFormsModule],
})
export class LoginPageComponent {
  login = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.login.valueChanges.subscribe((val) => console.log(val));
  }

  ngOnInit(): void {}

  getControl(name: string) {
    return this.login.get(name) as FormControl;
  }

  loginUser(login: FormGroup) {
    const { email, password } = login.value;
    this.authService.getStudentByEmail(email as string).subscribe(
      (res) => {
        if (res.length > 0 && res[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['student/general-info']);
          login.reset();
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
