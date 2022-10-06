import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input() filesList: Array<any> = [];
  @Input() isOnlyFile: boolean = false;
  @Input() indexActive: number = 0;
  @Input() disabled: boolean = false;
  @Output() delete = new EventEmitter();
  @Output() uploaded = new EventEmitter();
  files: Array<any> = [];
  dataSubcribe: any = null;
  

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.dataSubcribe && this.dataSubcribe.unsubscribe();
  }

  initSetting() {
    if ((this.filesList && this.filesList.length > 0)) {
      this.files = this.filesList;
    }
  }

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(evt: any) {
    const files = evt.target.files;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.disabled) {
      return
    }
    this.files.splice(index, 1);
    this.delete.emit({ id: index, index: this.indexActive });
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files?.length) {
        return;
      } else {
        // this.dataSubcribe = this.fileService.onUploadFile(this.files[index]).subscribe(res => {
        // });
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: any) {
    // Call api upload file
    for (const item of files) {
      item.progress = 100;
      if (!this.isOnlyFile) {
        this.files.push(item);
      } else {
        this.files = [item];
      }
    }
      // this.dataSubcribe = this.fileService.onAddFile(this.idAttachment, files).subscribe(res => {
      //   if (res && res.status === 'progress') {
      //     this.files[lengtFile - 1].progress += res.message;
      //   }
      //   if (res && res.data) {
      //     this.files[lengtFile - 1].idFile = res.data.idFile;
      //     this.uploaded.emit({ id: res.data, name: this.files[lengtFile - 1].name, index: this.indexActive });
      //   }

      // });
      // this.dataSubcribe = this.fileService.onUploadFile(files).subscribe(res => {
      //   if (res && res.status === 'progress') {
      //     this.files[lengtFile - 1].progress += res.message;
      //   }
      //   if (res && res.data) {
      //     this.files[lengtFile - 1].idFile = res.data.idFile;
      //     this.idAttachment = res.data.idDocument;
      //     this.uploaded.emit({ id: res.data, name: this.files[lengtFile - 1].name, index: this.indexActive });
      //   }
      // });
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals: number = 0) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
