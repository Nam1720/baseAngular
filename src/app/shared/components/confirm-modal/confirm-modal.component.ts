import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() type: string = 'warning'; // warning | delete
  @Input() title: string = '';
  @Input() iconHead: string = 'pi pi-exclamation-triangle';
  @Input() acceptLabel: string = 'Yes';
  @Input() rejectLabel: string = 'No';
  @Input() message: string = '';
  @Output() reject = new EventEmitter();
  @Output() accept = new EventEmitter();
  @Input() isShowNote : boolean = false;
  @Input() isLoading : boolean = false;
  textNote : string = '';
  visibleModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.reject.emit();
  }

  acceptConfirm(): void{
    if (this.isShowNote) {
      this.accept.emit(this.textNote);
    } else {
      this.accept.emit();
    }
  }

}
