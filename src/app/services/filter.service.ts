import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { PARAMS_FILTER_DEFAULT } from '../shared/constants/common';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  paramFilterSearch = PARAMS_FILTER_DEFAULT;
  formatTimeFilter: string = 'MM/DD/YYYY';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  initQueryParam(): void {
    const { page, size, keyword } = this.activatedRoute.snapshot.queryParams;
    const pageSize = size || PARAMS_FILTER_DEFAULT.pageSize;
    const pageNumber = page || PARAMS_FILTER_DEFAULT.pageNumber;
    const key = keyword || PARAMS_FILTER_DEFAULT.keyword;
    this.paramFilterSearch = { ...this.paramFilterSearch, pageSize, pageNumber, keyword: key };
  }

  /**
   * 
   * @param evt evt.first start = 0
   * @returns 
   */
  tablePagingEvent(evt: Paginator, totalPage: number = 1): void {
    const { pageNumber, pageSize, keyword } = this.paramFilterSearch;
    const pageActive = (evt.first / evt.rows) + 1
    // console.log('aaaa', pageNumber, pageSize, keyword, evt, pageActive, totalPage);

    if (Number(pageActive) > totalPage) {
      return
    }
    // const pageActive = Number(pageNumber) + 1;
    const rowActive = Number(evt.rows);
    this.paramFilterSearch = { ...this.paramFilterSearch, pageNumber: pageActive, pageSize: rowActive };
    const queryParams = { page: pageActive, size: rowActive, keyword };
    this.replaceQueryRoute(queryParams);
  }

  eventChangeKeyword(keyword: string): void {
    this.paramFilterSearch = { ...this.paramFilterSearch, pageNumber: 1, keyword };
    const queryParams = { keyword, page: 1 };
    this.replaceQueryRoute(queryParams);
  }

  eventChangKeyFilter(dataFilter: object, typeTime: boolean = false): void {
    this.paramFilterSearch = { ...this.paramFilterSearch, pageNumber: 1 };
    const queryParams = { ...dataFilter, page: 1 };
    this.replaceQueryRoute(queryParams);
  }
  eventRefresh(): void {
    //this.paramFilterSearch = { ...this.paramFilterSearch,refresh:""};
    const queryParams = { ...this.paramFilterSearch, refresh: Date.now() };
    this.replaceQueryRoute(queryParams);
  }

  resetAllQuery(): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {}
      }
    );
  }

  resetKeyword(): void {
    this.paramFilterSearch.keyword = '';
  }

  resetAllKey(): void {
    this.paramFilterSearch = PARAMS_FILTER_DEFAULT;
  }

  replaceQueryRoute(queryParams: any): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge' // remove to replace all query params by provided
      });
  }
}
