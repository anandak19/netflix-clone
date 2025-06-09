import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { TrendingSection } from './components/trending-section/trending-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TrendingSection],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
