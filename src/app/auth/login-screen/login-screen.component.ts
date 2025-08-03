import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  public moveToTopAnim1: boolean = false;
  public currentYear: number = new Date().getFullYear();
  public loginData: {
    email: string;
    password: string;
  } = {
    email: 'amar.amrouz@gmail.com',
    password: 'amz1108@',
  };
  constructor(public router: Router) {}

  ngOnInit() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList[0] == '___hidden') {
            entry.target.classList.add('___animate');
          }
        }
      });
    });

    let __hidden = document.querySelectorAll('.___hidden');

    __hidden.forEach((el) => {
      observer.observe(el);
    });

    /**
     * Apply move-to-top-animation-1
     * this animatiom will be applied only for class=logo-container
     */
    setTimeout(() => {
      this.moveToTopAnim1 = true;
    }, 1800);
  }

  redirectToMfa = () => {
    this.router.navigate(['mfa'], {
      queryParams: {
        email: this.loginData.email,
      },
    });
  };
}
