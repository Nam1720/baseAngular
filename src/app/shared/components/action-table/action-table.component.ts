import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { MenuActionTable } from './menu-action-table';

@Component({
  selector: 'app-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss']
})
export class ActionTableComponent implements OnInit {
  @Input() menus: MenuActionTable[] = [];
  @Input() position!: string;
  @Input() rowData: object = {};
  @Output() clickAction = new EventEmitter();
  @Output() openMenu = new EventEmitter();

  isOpenMenu: boolean = false;
  stylePosition: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onActionTable(action: MenuActionTable): void {
    this.clickAction.emit({ action, data: this.rowData });
  }

  onClickOpenMenu(evt: any) {
    const { innerWidth } = window;
    const innerHeight = window.screen.availHeight;
    const percentRight = ((innerWidth - evt.pageX - 50) / innerWidth) * 100;
    const percentSpaceTop = (evt.clientY / innerHeight) * 100;
    this.stylePosition = { right: percentRight + '%' };

    // console.log('percentSpaceTop: ', percentSpaceTop, 'evt.clientY', evt.clientY, 'innerHeight', innerHeight, 'window.screen.availHeight', window.screen.availHeight);
    if (percentSpaceTop >= 100) {
      this.stylePosition = { ...this.stylePosition, bottom: 5 + '%', top: 'auto' };
    } else if (percentSpaceTop > 65) {
      this.stylePosition = { ...this.stylePosition, bottom: (100 - (percentSpaceTop + 6)) + '%', top: 'auto' };
    } else {
      this.stylePosition = { ...this.stylePosition, bottom: 'auto', top: (percentSpaceTop + 6) + '%' };
    }
    
    this.isOpenMenu = true;
    this.openMenu.emit();
  }
}
