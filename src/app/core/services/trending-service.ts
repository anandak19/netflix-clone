import { Injectable } from '@angular/core';
import { TrendingNow } from '../interfaces/trendingNow';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  private trendingNowData: TrendingNow[] = [
    {
      movieName: 'Hit First',
      position: 1,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYGL4_ns5MGTE5-Yd3ZQVB5apyY9yxQ39lxjT_27ehdoGzrxRwNc4osgXEeifcv9yO_MgMySL-p6hMxtQZnIEkZmyglIJ7wm7ik.webp?r=c23',
    },
    {
      movieName: 'Hit 2',
      position: 2,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqOh2yhpKE8385dV9hjlxxXtG63RjSjrlNOkx2yLuGMYe8JFTnA9ScVsioAhTa9Ds34ERhB2R4aBFUng1j54IFwl5JvjgVmGEU.webp?r=d66',
    },
    {
      movieName: 'Hit 3' ,
      position: 3,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWtQdcUd4n6VKz6HTm_IbI2cOq0VDU7fDQpomIXBLuCYqtJ4j8hj2pz7j6spnX2osjRgTMJQ9xkMieYZWqC6xC8G4tGlTLJBm3I.webp?r=cc2',
    },
    {
      movieName: 'Hit 4',
      position: 4,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b',
    },
    {
      movieName: 'Hit 5',
      position: 5,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYUCgDPIk4LvnEw_j-dC5ca65oxm4yP2Z7RFKlRcN6WYzCwNA4MhTNqTRrSAK9zND3cSjrYEpbQculmTCXPD09ZbvdCosdbuOjc.webp?r=062',
    },
    {
      movieName: 'Hit 6',
      position: 6,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZFBdXweIqorvQIPkQbuKg9rFcZJJ8yCUzSX1ySYOsmrcMeUgLlY3YWvFcXee7lFjHwMT_Ofd03ttH-rTzAHPZskA6K-f4imBAY.webp?r=81d',
    },
    {
      movieName: 'Hit 7',
      position: 7,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUbEuw4gn448vhUbeTgwsmEsA4ZhBFHAbPyFyAk414jH72BDs0ALdA2TEDez1mRZHuyUjlpB_EL0LxkrymlRyHs2joUg2Izzl4Q.webp?r=ad2',
    },
    {
      movieName: 'Hit 8',
      position: 8,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf4wStrKekb1hEKRFD141eOa8rGZTWJK1QxVF2zxvJDivIDqQMNDUmh_d33HVtAxToXkZlAeLEzdhxPXCskBuNsi4X_wSv2Brzk.webp?r=7de',
    },
    {
      movieName: 'Hit 9',
      position: 9,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92',
    },
    {
      movieName: 'Hit 10',
      position: 10,
      imageUrl: 'https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABa2fSipl5PZ4Yp1Zg-jbdAUQiRU5X9KqEG3w_6Z21aphltfxA4PNYA98JIJtUmACk8DQJq7BeHJJeFjXQ7aiCxtmvRY98kBzRjJW_C9i6gjz_NJ3pnL1CQuIJpNAdZ71NgRV.webp?r=4c4',
    },
  ];

  constructor() {}

  getTrendingNowMovies(): TrendingNow[]{
    return this.trendingNowData
  }
}
