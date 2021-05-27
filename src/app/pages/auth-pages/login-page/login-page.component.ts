import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { AuthService } from '../../../services/auth.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User = new User();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.authService.login(form.value.email, form.value.password).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigateByUrl('/posts');
      })
    }
  }

}
