import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Bunkering,
  BuyerList,
  City,
  VesselList,
} from '../../interface/bunkering.customer';
import { dataBunkering } from '../../services/dataCustomer';

@Component({
  selector: 'app-bunkering-add',
  templateUrl: './bunkering-add.component.html',
  styleUrls: ['./bunkering-add.component.scss'],
})
export class BunkeringAddComponent implements OnInit {
  bunkeringForm: FormGroup;

  newBunkering: Bunkering[] = dataBunkering;
  @Input() customers: any;
  @Output() submit = new EventEmitter<Bunkering[]>();

  cities: City[];
  vesselList: VesselList[];
  buyerList: BuyerList[];
  suplierList: BuyerList[];

  deliveryDate: Date;

  selectedCity: City;
  selectedVesselList: VesselList;
  selectedBuyerList: BuyerList;
  selectedSuplierList: BuyerList;

  constructor(private route: Router, private formBuilder: FormBuilder) {
    this.vesselList = [
      { name: 'P20', value: '1' },
      { name: 'P12', value: '2' },
      { name: 'P90', value: '3' },
      { name: 'P60', value: '4' },
      { name: 'P10', value: '5' },
    ];
    this.buyerList = [
      { name: 'Phạm Văn Nam', value: 'Phạm Văn Nam' },
      { name: 'Phạm Văn A', value: 'Phạm Văn A' },
      { name: 'Phạm Văn B', value: 'Phạm Văn B' },
    ];
    this.suplierList = [
      { name: 'Lò Văn Ún', value: 'Lò Văn Ún' },
      { name: 'Lò Văn A', value: 'Lò Văn A' },
      { name: 'Lò Văn B', value: 'Lò Văn B' },
    ];
  }

  onSubmit(bunkeringForm: any) {
    console.log('submit', bunkeringForm.value);
    this.customers = this.newBunkering.push(bunkeringForm.value);
    this.route.navigate(['/bunkering']);
  }

  onCancel() {
    this.route.navigate(['/bunkering']);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bunkeringForm = this.formBuilder.group({
      id: ['', Validators.required],
      vessel: ['', Validators.required],
      buyerName: ['', Validators.required],
      addressBuyer: ['', Validators.required],
      emailBuyer: ['', Validators.required],
      phoneBuyer: ['', Validators.required],

      suplier: ['', Validators.required],
      phoneSuplier: ['', Validators.required],
      addressSuplier: ['', Validators.required],
      emailSuplier: ['', Validators.required],

      orderDates: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      suplierPaymentDate: ['', Validators.required],
      buyerPaymentDate: ['', Validators.required],
      fileUpload: ['', Validators.required],

      detail: this.formBuilder.array([this.getDetailItem()]),
    });
  }

  // form array
  get detailArray() {
    return this.bunkeringForm.get('detail') as FormArray;
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
    this.detailArray.push(this.getDetailItem());
  }

  removeDetail(index: number) {
    this.detailArray.removeAt(index);
  }

  isEdit: boolean = false;
  handleClickEdit(index: number) {
    this.isEdit = true;
    // const data = this.datalist[index];
    // this.datalist[index] = { ...data, Edit: true };
  }

  updateForm() {
    this.bunkeringForm.updateValueAndValidity({
      emitEvent: true,
    });
    const data = this.bunkeringForm.value;
    console.log({ data });

    // const formatted = formatCode(data);
    // this.code.nativeElement.innerHTML = formatted;
  }
}
