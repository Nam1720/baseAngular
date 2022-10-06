import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss']
})
export class InputTableComponent implements OnInit {
  @Output() onClickInput = new EventEmitter();
  hasInput: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }

}
