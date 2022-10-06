import { Injectable } from '@angular/core';
import { IBreadcrumb } from '../shared/interfaces/common-interface'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public listBreadcrumb: IBreadcrumb[] = [];
  constructor() { }
}
