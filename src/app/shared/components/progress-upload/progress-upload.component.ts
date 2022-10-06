import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-upload',
  templateUrl: './progress-upload.component.html',
  styleUrls: ['./progress-upload.component.scss']
})
export class ProgressUploadComponent implements OnInit {
  @Input() progress = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
