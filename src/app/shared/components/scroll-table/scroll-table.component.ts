import { Component, ElementRef, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll-table',
  templateUrl: './scroll-table.component.html',
  styleUrls: ['./scroll-table.component.scss']
})
export class ScrollTableComponent  implements  OnInit{

  @HostBinding('class.green') isVisibleInView = false;
  @Input() dataDay: number 
  @Output() dataDays = new EventEmitter();
  
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {

  }
  ngOnInit(): void {

  } 


  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      if ( entries[0].isIntersecting === true ) {
        this.isVisibleInView = true;
        this.dataDays.emit(this.dataDay);
        console.log('dddddddddddd', this.dataDay);
      } else {
      }
    }, {
      threshold: 0.5
    });
    return this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
