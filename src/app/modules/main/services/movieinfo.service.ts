import { Injectable } from '@angular/core';
import { Movieinfo } from '../models/movieinfo.model';

@Injectable({
  providedIn: 'root',
})
export class MovieinfoService {
  private movies: Movieinfo[] = [
    {
      title: 'Greenland',
      overview: 'BİLGİ BİLGİ BİLGİ BİLGİ',
      release_date: '2010-07-16',
    },
  ];
  constructor() {}
  listinfo():Movieinfo[]{
    return this.movies;
  }
}
