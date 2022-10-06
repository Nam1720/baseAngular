import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, throttleTime } from 'rxjs/operators';


@Component({
  selector: 'app-input-text-throttle',
  templateUrl: './input-text-throttle.component.html',
  styleUrls: ['./input-text-throttle.component.scss']
})
export class InputTextThrottleComponent implements OnInit {

  @Input() placeholder: string = 'Tìm kiếm';
  @Input() styleCss: string = '';
  @Output() filter = new EventEmitter<string>();
  // keyword: string = '';
  keywordUpdate = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute, public filterService: FilterService) {
    this.handleFilterBykey();
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.keywordUpdate.unsubscribe();
    
  }

  onEventChangeKeyword(value: string): void {
    this.keywordUpdate.next(value);
  }
  

  handleFilterBykey(): void {
    this.keywordUpdate.pipe(
      debounceTime(600),
      // throttleTime(600),
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.filter.emit(value.trim());
    })
  }
}
