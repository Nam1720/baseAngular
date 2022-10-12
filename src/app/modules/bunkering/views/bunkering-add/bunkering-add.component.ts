import { Component, OnInit } from '@angular/core';
import { City } from '../../interface/bunkering.customer';

@Component({
  selector: 'app-bunkering-add',
  templateUrl: './bunkering-add.component.html',
  styleUrls: ['./bunkering-add.component.scss'],
})
export class BunkeringAddComponent implements OnInit {
  cities: City[];
  date3: Date;
  date4: Date;

  selectedCity: City;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  datalist: any = [
    {
      id: 0,
      quantityFo: 1,
      quantityGo: 2,
      ImportPriceFO: 3,
      ImportPriceGO: 4,
      ImportBarging: 5,
      ExportPriceFO: 6,
      ExportPriceGO: 7,
      ExportBarging: 8,
      Edit: false,
    },
    {
      id: 1,
      quantityFo: 1,
      quantityGo: 2,
      ImportPriceFO: 3,
      ImportPriceGO: 4,
      ImportBarging: 5,
      ExportPriceFO: 6,
      ExportPriceGO: 7,
      ExportBarging: 8,
      Edit: false,
    },
    {
      id: 2,
      quantityFo: 1,
      quantityGo: 2,
      ImportPriceFO: 3,
      ImportPriceGO: 4,
      ImportBarging: 5,
      ExportPriceFO: 6,
      ExportPriceGO: 7,
      ExportBarging: 8,
      Edit: false,
    },
  ];
  ngOnInit(): void {}

  handleClickEdit(id: number) {
    const data = this.datalist[id];
    this.datalist[id] = { ...data, Edit: true };
  }
  handleClickDelete(id: number) {
    this.datalist = this.datalist.filter((item: any) => {
      return item.id !== id;
    });
  }
}
