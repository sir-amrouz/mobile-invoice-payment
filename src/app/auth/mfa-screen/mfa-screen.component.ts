import { Component, OnInit } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {
  DEFAULT_EMAIL_VERIFICATION_CODE_LENGTH,
  DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME,
} from 'src/include/Models/CONSTANTS';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfa-screen',
  imports: [InputOtpModule, ButtonModule, FormsModule],
  templateUrl: './mfa-screen.component.html',
  styleUrls: ['./mfa-screen.component.scss'],
})
export class MfaScreenComponent implements OnInit {
  public moveToTopAnim1: boolean = false;
  public currentYear: number = new Date().getFullYear();

  public loginData: {
    code: string;
    email: string;
  } = {
    code: '',
    email: '',
  };

  public DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME: number =
    DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME;

  public DEFAULT_EMAIL_VERIFICATION_CODE_LENGTH: number =
    DEFAULT_EMAIL_VERIFICATION_CODE_LENGTH;

  /**
   * This is important to show and hide spinner progress inside the validation button.
   */
  public isValidatingCode: boolean = false;

  constructor(public router: Router) {
    /**
     * Retreive email from URL params
     */
    let url = new URL(location.href);
    this.loginData.email = url.searchParams.get('email') as string;
    this.setCodeRemainingTime();
  }

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

  resentCode = () => {
    this.setCodeRemainingTime();
  };

  submitCode = () => {
    /**
     * WAITING for API !
     * if code is valide the redirect user to main form
     */
    this.isValidatingCode = true;
    setTimeout(() => {
      this.router.navigate([]);
      this.isValidatingCode = false;
    }, 3000);
  };

  setCodeRemainingTime = () => {
    this.DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME =
      DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME;
    let timer = setInterval(() => {
      if (this.DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME <= 0) {
        clearInterval(timer);
        return;
      }

      this.DEFAULT_EMAIL_VERIFICATION_CODE_REMAINING_TIME -= 1;
    }, 1000);
  };
}
