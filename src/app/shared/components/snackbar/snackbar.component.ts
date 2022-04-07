import { Component, OnInit } from '@angular/core';
import { snackBarAnimations } from './snackbar.animation';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [snackBarAnimations.snackBarState]
})
export class SnackbarComponent {
  visible = false
  message = ""
  timeout: number | undefined

  constructor() { }

  show(message:string) {
    clearTimeout(this.timeout);
    this.message = message;
    this.visible = true;
    this.timeout = window.setTimeout(() => this.hide(), 3000);
  }

  hide() {
    clearTimeout(this.timeout);
    this.visible = false;
  }
}
