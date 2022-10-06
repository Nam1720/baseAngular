import { Component, Input, OnInit } from '@angular/core';

import { TheadModel } from './../../interface/table.interface';

@Component({
  selector: 'app-table-head-item',
  templateUrl: './table-head-item.component.html',
  styleUrls: ['./table-head-item.component.scss']
})
export class TableHeadItemComponent implements OnInit {
  @Input() dataTh: TheadModel = { name: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
