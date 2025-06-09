import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TrendingCard } from './trending-card/trending-card';
import { TrendingNow } from '../../../../core/interfaces/trendingNow';
import { TrendingService } from '../../../../core/services/trending-service';

@Component({
  selector: 'app-trending-section',
  imports: [TrendingCard,],
  templateUrl: './trending-section.html',
  styleUrl: './trending-section.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrendingSection implements OnInit {

  trendingMovies!: TrendingNow[]

  constructor(
    private _trendingService: TrendingService
  ){}

  getTrendingMovies(){
    this.trendingMovies = this._trendingService.getTrendingNowMovies()
  }

  ngOnInit(): void {
    this.getTrendingMovies()
  }
}
