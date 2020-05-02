import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService,
        private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any)
  {
    this.authService.loginUser(loginForm.userName, loginForm.password);
    console.log(loginForm);
    console.log('you have logged in !!');
    this.router.navigate(['/events']);
  }

  cancelLogin(){
    this.router.navigate(['/events']);
  }
}
