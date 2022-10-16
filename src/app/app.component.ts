import { Component, OnInit } from '@angular/core';

declare function tl(): any;

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'oconnor';
  formModal: any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('staticBackdrop')
    );
    tl();
  }
  openModal() {
    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }
}
