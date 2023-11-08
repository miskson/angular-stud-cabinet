import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  login: FormGroup | any;
  constructor(private _http: HttpClient, private _route: Router) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  loginData(login: FormGroup) {
    this._http.get<any>('http://localhost:3000/signedStudents').subscribe(
      (res) => {
        console.log(res);
        console.log(this.login.email, this.login.password);
        const isUserMatch = res.find((a: any) => {
          return (
            a.email === this.login.value.email &&
            a.password === this.login.value.password
          );
        });

        if (isUserMatch) {
          this.login.reset();
          this._route.navigate(['general-info']);
        } else {
          alert('USER NOT FOUND');
          this._route.navigate(['login']);
        }
      },
      (err) => {
        alert('RequestError: something went wrong');
      }
    );
  }
}
