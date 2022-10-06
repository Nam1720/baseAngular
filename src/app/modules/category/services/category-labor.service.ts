import { Injectable } from '@angular/core';
import { FilterCommonDetail } from 'src/app/shared/interfaces/common-interface';
import { LaborDetail } from '../interfaces/category-labor';

@Injectable({
  providedIn: 'root'
})
export class CategoryLaborService {

  listFilterFactory: FilterCommonDetail[] = [
    { id: 0, name: 'A', value: 0 },
    { id: 1, name: 'B', value: 1 },
    { id: 2, name: 'C', value: 2 },
    { id: 3, name: 'D', value: 3 },
  ];

  listLaborTable: LaborDetail[] = [
    { id: 0, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 1, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 2, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 3, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 4, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 5, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 6, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 7, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
    { id: 8, code: '4353546', name: 'Hoàng Thị Yến', DOB: 'xxxxx', position: 'Dev', department: 'IT' },
  ]
  constructor() { }
}
