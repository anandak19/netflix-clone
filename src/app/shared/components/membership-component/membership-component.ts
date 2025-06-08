import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-membership-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './membership-component.html',
  styleUrl: './membership-component.scss'
})
export class MembershipComponent {

  emailForm ={
    email: ''
  }

  getStarted(){
    console.log(this.emailForm)
  }
}
