import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isOpenSidebar: boolean = true;

  constructor() { }

  onToggleSidebar(): void {
    this.isOpenSidebar = !this.isOpenSidebar
  }
}
