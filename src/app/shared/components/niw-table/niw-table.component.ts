import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { ConfigTable, TheadModel, TbodyModel, ConfigTableCol, KeyTableRender, MenuAction } from './interface/table.interface';

@Component({
  selector: 'app-niw-table',
  templateUrl: './niw-table.component.html',
  styleUrls: ['./niw-table.component.scss']
})
export class NiwTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() config: ConfigTable = {};
  @Input() isShowDateInMoth: ConfigTable = {};
  @Input() isChildTableSameParent: boolean = true;
  @Input() isShowSelect: boolean = true;
  @Input() menuAction: MenuAction[] = [];
  _thead: TheadModel[] = [];
  _tbody: TbodyModel[] = [];
  _configCollumn: ConfigTableCol[] = [];
  _configCollumnExpend: ConfigTableCol[] = [];
  theadChild: any = {};
  theadChildNum: number[] = [];
  allKeyRender: ConfigTableCol[] = []; // support render data
  _monthTable: number = new Date().getMonth();
  daysInMonth: number = 0;
  expendActive: number = -1;
  selectedRows: any[]=[];
  selectedRowsId: number[]=[];



  @ViewChild('ob', { read: ElementRef })
  ob: ElementRef;
  private observer: IntersectionObserver;

  get configCollumn() {
    return this._configCollumn;
  }

  get configCollumnExpend() {
    return this._configCollumnExpend;
  }

  @Input() set configCollumn(value: ConfigTableCol[]) {
    if (!value) {
      return;
    }
    // console.log('Data col: ', value, this.theadChild);
    this._configCollumn = value;
    this.setDataChildConfig(value);
  }

  @Input() set configCollumnExpend(value: ConfigTableCol[]) {
    if (!value) {
      return;
    }
    this._configCollumnExpend = value;
    // this.setDataChildConfig(value);
  }
  
  get displayMonthTable() {
    return this._monthTable;
  }

  // Input month number
  @Input() set displayMonthTable(month: number) {
    if (!month) {
      return;
    }
    const dateCurr = new Date();
    this._monthTable = month;
    this.daysInMonth = new Date(dateCurr.getFullYear(), month, 0).getDate();
  }

  constructor() { }

  ngOnInit(): void {
  }

  trackById (index: number, item: any): string {
    return `${index}`;
  }

  setDataChildConfig (data: ConfigTableCol[], child: number = 1): void {
    if (!data) {
      return;
    }
    // console.log('Set data child head:', data);
    
    const lengthData = data.length;
    this.theadChildNum.push(child);
    lengthData > 0 && data.map((row: ConfigTableCol, index: number) => {
      // Insert array key support render data
      if (row && child === 1) {
        row.key && this.allKeyRender.push(row);
        this.setBodyDataKey(row);
      }
      // Insert thead support display multi level thewad
      this.setHeadLabel({ row, index, lengthData, childCurr: child });
    })
  }

  setHeadLabel (data: { row: ConfigTableCol, index: number, lengthData: number, childCurr: number } ): void {
    const keyChild = `head${data.childCurr}`;
      if (data.row?.children) {
        if (!this.theadChild[keyChild]) {
          this.theadChild[keyChild] = data.row.children;
        } else {
          this.theadChild[keyChild] = [...this.theadChild[keyChild], ...data.row.children]
        }
      }
      if (data.index === data.lengthData - 1 && this.theadChild[keyChild]?.length) {
        this.setDataChildConfig(this.theadChild[keyChild], data.childCurr + 1);
      }
  }

  setBodyDataKey (data: ConfigTableCol): void {
    if (!data.children || data.children.length === 0) {
      return;
    }
    data.children.map((row: ConfigTableCol) => {
      this.allKeyRender.push(row);
      if (row.children) {
        this.setBodyDataKey(row);
      }
    })
  }

  counter(i: number): Array<number> {
    return new Array(i);
  }

  showExpandedItem (index: number) {
    this.expendActive = this.expendActive === index ? -1 : index;
  }
  checkAll() {
    var checkBox:any = document.getElementById("allCheck");
    if (checkBox.checked) {
      this.selectedRows = this.dataSource;
      this.selectedRowsId = this.selectedRows.map(item => item.id);
    } else {
      this.selectedRows = [];
      this.selectedRowsId = [];
    }
  }

  onShowOption() {
    console.log('show');
    
  }

  loadColumn(elements: any) {
    elements.forEach((element: any) => {
      if (element.isIntersecting) {
        if (element.target.attributes['data-tr']) {
          const tr = Number(element.target.attributes['data-tr'].value);
          const day = Number(element.target.attributes['data-day'].value);
          console.log('tr',day);

          element.target.innerHTML = this.dataSource[tr].days[day];
        }

        this.observer.unobserve(element.target);
      }
    });
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (element) => this.loadColumn(element),
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );
    Array.from(this.ob.nativeElement.children).forEach((childrenOb: any) => {
      Array.from(childrenOb.children).forEach((children) => {
        this.observer.observe(children as HTMLElement);
      });
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
 
}
