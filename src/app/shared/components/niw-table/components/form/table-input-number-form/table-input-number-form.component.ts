import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-input-number-form',
  templateUrl: './table-input-number-form.component.html',
  styleUrls: ['./table-input-number-form.component.scss']
})
export class TableInputNumberFormComponent implements OnInit {
  @Input() dataNumber: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  onInputValue (value: any) {
    console.log(value);
    
  }

}
