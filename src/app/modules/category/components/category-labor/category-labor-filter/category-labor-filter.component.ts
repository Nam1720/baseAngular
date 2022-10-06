import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { CategoryLaborService } from '../../../services/category-labor.service';

@Component({
  selector: 'app-category-labor-filter',
  templateUrl: './category-labor-filter.component.html',
  styleUrls: ['./category-labor-filter.component.scss']
})
export class CategoryLaborFilterComponent implements OnInit {

  visibleModalAdd: boolean = false;

  constructor(
    public filterService: FilterService,
    public categoryLaborService: CategoryLaborService
  ) { }

  ngOnInit(): void {
  }

  onSelectStatus(event: any): void {
    this.filterService.eventChangKeyFilter({ idFactory: event.value ? event.value :  0 });
  }

  onHandleAdd(){
    this.visibleModalAdd = true;
  }
}
