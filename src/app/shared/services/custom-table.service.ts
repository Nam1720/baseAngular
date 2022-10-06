import {Injectable} from '@angular/core';
import datas from './MOCK_DATA.json';
import data_option from './MOCK_DATA _option.json';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

export interface data {
  check: string;
  product_id: number;
  customer: string;
  product_name: string;
  supporter: string;
  address: string;
  plan: string;
  month: string;
  next_month: string;

  [props: string]: any;
}


@Injectable({
  providedIn: 'root'
})
export class CustomTableService<T> {

  data: any[] = [];
  option: any[] = [];

  constructor(http: HttpClient) {
  }

  getData() {
    return of(datas).subscribe(res => {
      this.data = res;
    })
  }

  getOptionSelect() {
    return of(data_option).subscribe(res => this.option = res);
  }
}
