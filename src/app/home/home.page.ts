import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public isUserOnline: boolean = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.isUserOnline
      ? /**
         * Redirect user to main form where he can select sonelgaz service
         */
        console.log('redirect user to main form')
      : /**
         * Redirect user to login page
         */
        this.router.navigate(['login']);
  }
}
