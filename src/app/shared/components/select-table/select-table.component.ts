import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss'],
})
export class SelectTableComponent implements OnInit {
  @Input() menus: any[] = [];
  @Input() position!: string;
  @Input() rowData: object = {};
  @Input() value: number[] = [];
  @Output() clickAction = new EventEmitter();
  @Output() openMenu = new EventEmitter();
  @ViewChild('valueSelect') valueSelect: ElementRef<HTMLParagraphElement>;


  isOpenMenu: boolean = false;
  stylePosition: any = {};

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  onActionTable(action: any): void {
    this.clickAction.emit({action, data: this.rowData});
    this.renderer.setProperty(this.valueSelect.nativeElement, 'innerHTML', action.data.option)
  }

  onClickOpenMenu(evt: any) {
    const {innerWidth} = window;
    const innerHeight = window.screen.availHeight;


    // const percentRight = ((innerWidth - evt.pageX - 50) / innerWidth) * 100;
    const percentSpaceTop = (evt.clientY / innerHeight) * 100;

    this.stylePosition = {right: 0 + '%'};
    // console.log('innerWidth: ', innerWidth);
    // console.log('innerHeight: ',  window.screen.availHeight);
    // console.log('evt.pageX: ',  evt.pageX);
    // console.log('evt.clientY: ',  evt.clientY);
    // console.log('percentSpaceTop: ',  percentSpaceTop);

    // Evt < 75%screen x menu show bottom to top

    // console.log('percentSpaceTop: ', percentSpaceTop, 'evt.clientY', evt.clientY, 'innerHeight', innerHeight, 'window.screen.availHeight', window.screen.availHeight);
    if (percentSpaceTop >= 100) {
      this.stylePosition = {
        ...this.stylePosition,
        bottom: 5 + '%',
        top: '100%',
      };
    } else if (percentSpaceTop > 65) {
      this.stylePosition = {
        ...this.stylePosition,
        bottom: 100 - (percentSpaceTop + 6) + '%',
        top: '100%',
      };
    } else {
      this.stylePosition = {
        ...this.stylePosition,
        bottom: 'auto',
        // top: percentSpaceTop + 6 + '%',
        top: 100 + '%'
      };
    }


    this.isOpenMenu = true;
    this.openMenu.emit();
  }
}
