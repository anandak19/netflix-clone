import { Component } from '@angular/core';
import { MembershipComponent } from '../../shared/components/membership-component/membership-component';
import { LangSelect } from '../../shared/components/lang-select/lang-select';

@Component({
  selector: 'app-footer',
  imports: [MembershipComponent, LangSelect],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
