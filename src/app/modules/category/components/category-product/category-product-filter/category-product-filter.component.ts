import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { CategoryProductService } from '../../../services/category-product.service'

@Component({
  selector: 'app-category-product-filter',
  templateUrl: './category-product-filter.component.html',
  styleUrls: ['./category-product-filter.component.scss']
})
export class CategoryProductFilterComponent implements OnInit {

  constructor(
    public filterService: FilterService,
    public categoryProductService: CategoryProductService,
  ) { }

  ngOnInit(): void {
  }

  onSelectType(e: any) {

  }

}
