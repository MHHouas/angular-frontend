import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthenticationService, private router:Router) {
    localStorage.clear();
  }
  
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  username = 'user'
  password = ''
  invalidLogin = false
  
  
    checkLogin() {
      if (this.service.authenticate(this.loginForm.value.username, this.loginForm.value.password)
      ) {
        this.router.navigate([''])
        this.invalidLogin = false
      } else
        this.invalidLogin = true
    }

}
