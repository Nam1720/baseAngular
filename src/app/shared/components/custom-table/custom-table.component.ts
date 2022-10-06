import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {Children, ConfigColumn, ValueSelect} from './custom-table.model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent<T> implements OnInit, OnChanges {
  @Input() configColumns: ConfigColumn[] = [];
  @Input() dataSource: any[] = [];
  @Input() option: any = [];


  colChildren: any[] = [];
  valueSelected: number[] = [];

  expandRowColumn = {rowSpan: 1, colSpan: 1};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['configColumns']) {
      this.calcExpandCols();
      this.onFilterChildren();
    }
  }

  private calcExpandCols() {
    const hasColSpan = this.configColumns.some((column) => column.colChildren);
    const hasRowSpan = this.configColumns.some((column) => column.rowChildren);
    if (hasColSpan) {
      this.expandRowColumn.rowSpan = this.expandRowColumn.rowSpan + 1;
    }

    if (hasRowSpan) {
      this.expandRowColumn.rowSpan = this.expandRowColumn.rowSpan + 1;
    }
  }

  onFilterChildren() {
    this.configColumns.forEach((item) => {
      if (item.colChildren) {
        this.colChildren.push(...item.colChildren);
      }
    });

   
  }

  calcColSpan(
    colChildren: Children[] | undefined
  ) {
    if (colChildren && colChildren.length > 0) {
      return this.expandRowColumn.colSpan + 1;
    }
    return this.expandRowColumn.colSpan;
  }

  calcRowSpan(
    colChildren: Children[] | undefined
  ) {
    if (colChildren && colChildren.length > 0) {
      return this.expandRowColumn.rowSpan - 1;
    }
    return this.expandRowColumn.rowSpan;
  }

  onActionRow(e: any) {
    console.log(e)
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
