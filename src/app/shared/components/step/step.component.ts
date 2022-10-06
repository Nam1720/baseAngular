import { Component, Input, OnInit } from '@angular/core';
import { Step } from '../../interfaces/common-interface';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() activeIndex: number = 3;
  @Input() listStep: Step[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(step: Step): boolean {
    // console.log('step.id', step,  this.activeIndex);
    
    return step.id <= this.activeIndex;
  }

}
