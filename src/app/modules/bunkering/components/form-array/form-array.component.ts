import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  formArrayBunkering: FormGroup;

  get detail() {
    return this.formArrayBunkering.get('detail') as FormArray;
  }
  constructor(private formBuilder: FormBuilder) {}

  datalist = [
    {
      id: 0,
      quantityFo: 1,
      quantityGo: 2,
      importPriceFO: 3,
      importPriceGO: 4,
      importBarging: 5,
      exportPriceFO: 6,
      exportPriceGO: 7,
      exportBarging: 8,
      edit: false,
    },
  ];

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formArrayBunkering = this.formBuilder.group({
      name: ['', Validators.required],
      detail: this.formBuilder.array([this.getDetailItem()]),
    });
  }

  private getDetailItem() {
    return this.formBuilder.group({
      id: [],
      quantityFo: [],
      quantityGo: [],
      importPriceFo: [],
      importPriceGo: [],
      barging: [],
      exportPriceFO: [],
      exportPriceGO: [],
      exportBarging: [],
      edit: false,
    });
  }

  onClickAdd() {
    this.detail.push(this.getDetailItem());
  }

  /**
   * Remove a albums item from the form array
   * @param index - index of the song item to be removed
   */

  removeDetail(index: number) {
    this.detail.removeAt(index);
  }

  isEdit: boolean = false;
  handleClickEdit(index: number) {
    this.isEdit = true;
    const data = this.datalist[index];
    // this.datalist[index] = { ...data, Edit: true };
  }

  updateForm() {
    this.formArrayBunkering.updateValueAndValidity({
      emitEvent: true,
    });
    const data = this.formArrayBunkering.value;
    console.log({ data });

    // const formatted = formatCode(data);
    // this.code.nativeElement.innerHTML = formatted;
  }

  onSubmit() {
    console.log('value', this.formArrayBunkering.value);
  }
}
