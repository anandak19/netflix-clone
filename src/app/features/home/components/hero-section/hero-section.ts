import { Component } from '@angular/core';
import { LangSelect } from '../../../../shared/components/lang-select/lang-select';
import { SigninButton } from '../../../../shared/components/signin-button/signin-button';
import { MembershipComponent } from '../../../../shared/components/membership-component/membership-component';

@Component({
  selector: 'app-hero-section',
  imports: [LangSelect, SigninButton, MembershipComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {

}
