import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-select',
  imports: [CommonModule],
  templateUrl: './lang-select.html',
  styleUrl: './lang-select.scss'
})
export class LangSelect {
  langs : Array<string> = ['Hindi']
}
