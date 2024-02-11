import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  flagUserName: boolean = false;
  userName: string = '';
  userNameInput(): void {
    if (this.userName.length > 0 && this.userName != '') {
      this.flagUserName = true;
    } else {
      this.flagUserName = false;
    }
  }
  flagAge: boolean = false;
  userAge: number = 0;
  userAgeInput(): void {
    if (this.userAge > 0) {
      this.flagAge = true;
    } else {
      this.flagAge = false;
    }
  }
  flagPassWord: boolean = false;
  userPassWord: number = 0;
  userPassWordInput(): void {
    if (this.userPassWord > 0) {
      this.flagPassWord = true;
    } else {
      this.flagPassWord = false;
    }
  }
  flagEmail: boolean = false;
  userEmail: string = '';
  userEmailInput(): void {
    if (this.userEmail.length > 0 && this.userEmail != '') {
      this.flagEmail = true;
    } else {
      this.flagEmail = false;
    }
  }
}
