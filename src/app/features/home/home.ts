import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { TrendingSection } from './components/trending-section/trending-section';
import { ReasonsSection } from './components/reasons-section/reasons-section';
import { FaqSection } from './components/faq-section/faq-section';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TrendingSection, ReasonsSection, FaqSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
