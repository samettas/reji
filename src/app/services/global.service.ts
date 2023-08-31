import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public authenticated: boolean = false;
  constructor() {}
}
