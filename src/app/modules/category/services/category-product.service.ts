import { Injectable } from '@angular/core';
import { FilterCommonDetail } from 'src/app/shared/interfaces/common-interface';
import { ProductDetail } from '../interfaces/category-product'

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {
  listProductTable: ProductDetail[] = [
    { id: 0, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
    { id: 1, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
    { id: 2, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
    { id: 3, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
    { id: 4, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
    { id: 5, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
    { id: 6, code: '003050', name: 'BTP', type: 1100008474, unit: 'cái', price: 255000, image: '', specifications: '000999808888'},
  ]

  listFilterType: FilterCommonDetail[] = [
    { id: 0, name: 'A', value: 0 },
    { id: 1, name: 'B', value: 1 },
    { id: 2, name: 'C', value: 2 },
    { id: 3, name: 'D', value: 3 },
  ];

  listFilterCode: FilterCommonDetail[] = [
    { id: 0, name: 'A', value: 0 },
    { id: 1, name: 'B', value: 1 },
    { id: 2, name: 'C', value: 2 },
    { id: 3, name: 'D', value: 3 },
  ];

  constructor() { }
}
