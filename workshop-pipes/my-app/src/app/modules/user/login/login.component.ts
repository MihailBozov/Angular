import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isEmailValid: boolean = false;
  domains: string[] = EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) { }

  validate(form: NgForm): boolean {
    this.isEmailValid = !!form.controls['inputEmail'].errors?.['required'];
    return this.isEmailValid;
  }

  login(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    const { email, password } = form.value

    this.userService.login(email, password).subscribe(()=> {
      this.router.navigate(['/themes'])
    });
  }
}
