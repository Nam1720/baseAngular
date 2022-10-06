import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryLaborService } from '../../../services/category-labor.service';

@Component({
  selector: 'app-modal-add-category-labor',
  templateUrl: './modal-add-category-labor.component.html',
  styleUrls: ['./modal-add-category-labor.component.scss']
})
export class ModalAddCategoryLaborComponent implements OnInit {
  @Output() saved = new EventEmitter();
  @Output() close = new EventEmitter();

  formSubmited: boolean = false;
  formValidateInfo: FormGroup = new FormGroup({ name: this.fb.control('', [Validators.required]) });
  visibleModal: boolean = true;
  dataSubcribe: any = null;

  constructor(
    private fb: FormBuilder,
    public categoryLaborService: CategoryLaborService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.settingFormBuilder();
  }

  checkFormValid(name: string): boolean {
    return this.formValidateInfo.controls[name].invalid &&
      (
        this.formSubmited ||
        this.formValidateInfo.controls[name].dirty ||
        this.formValidateInfo.controls[name].touched
      )
  }

  settingFormBuilder(): void {
    this.formValidateInfo = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      date: this.fb.control('', [Validators.required]),
      address: this.fb.control(''),
      position: this.fb.control(null),
      sex: this.fb.control(0),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      department: this.fb.control(null),
      file: this.fb.control(''),
    });
  }

  closeModal(): void {
    this.close.emit();
  }

  onAddLabor(): void {
    console.log('this.formValidateInfo: ', this.formValidateInfo.value);
    
    this.formSubmited = true;
    if (this.formValidateInfo.invalid) {
      return;
    }
    this.messageService.add({ severity: 'success', detail: 'Tạo mới nhân công thành công' });
    // 
    this.formSubmited = false;
  }

}
