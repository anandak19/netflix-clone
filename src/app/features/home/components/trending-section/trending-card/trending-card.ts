import { Component, Input, input } from '@angular/core';
import { TrendingNow } from '../../../../../core/interfaces/trendingNow';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending-card',
  imports: [CommonModule],
  templateUrl: './trending-card.html',
  styleUrl: './trending-card.scss'
})
export class TrendingCard {
  @Input() movieData!: TrendingNow;
}
