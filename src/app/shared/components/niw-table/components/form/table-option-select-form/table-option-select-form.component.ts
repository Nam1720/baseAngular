import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-option-select-form',
  templateUrl: './table-option-select-form.component.html',
  styleUrls: ['./table-option-select-form.component.scss']
})
export class TableOptionSelectFormComponent<T> implements OnInit {
  @Input() optionsMenu: any;
  @Output() showOption = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption (option: any): void {
    console.log('Option choosed: ', option);
  }

  onShowOption (): void {
    this.showOption.emit();
  }

}
