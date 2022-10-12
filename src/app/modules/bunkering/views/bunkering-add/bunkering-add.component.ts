import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private route: Router) {
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

  datalist: any = [
    {
      id: 0,
      quantityFo: 1,
      quantityGo: 2,
      ImportPriceFO: 3,
      ImportPriceGO: 4,
      ImportBarging: 5,
      ExportPriceFO: 6,
      ExportPriceGO: 7,
      ExportBarging: 8,
      Edit: false,
    },
    {
      id: 1,
      quantityFo: 1,
      quantityGo: 2,
      ImportPriceFO: 3,
      ImportPriceGO: 4,
      ImportBarging: 5,
      ExportPriceFO: 6,
      ExportPriceGO: 7,
      ExportBarging: 8,
      Edit: false,
    },
    {
      id: 2,
      quantityFo: 1,
      quantityGo: 2,
      ImportPriceFO: 3,
      ImportPriceGO: 4,
      ImportBarging: 5,
      ExportPriceFO: 6,
      ExportPriceGO: 7,
      ExportBarging: 8,
      Edit: false,
    },
  ];

  onClickAdd() {
    this.datalist.push({
      id: this.datalist.length + 1,
      quantityFo: 1,
      quantityGo: 1,
      ImportPriceFO: 1,
      ImportPriceGO: 1,
      ImportBarging: 1,
      ExportPriceFO: 1,
      ExportPriceGO: 1,
      ExportBarging: 1,
      Edit: true,
    });
  }

  ngOnInit(): void {
    console.log('first', this.datalist);
  }

  bunkeringForm = new FormGroup({
    id: new FormControl(),
    vessel: new FormControl(),
    buyerName: new FormControl(),
    addressBuyer: new FormControl(),
    emailBuyer: new FormControl(),
    phoneBuyer: new FormControl(),

    suplier: new FormControl(),
    phoneSuplier: new FormControl(),
    addressSuplier: new FormControl(),
    emailSuplier: new FormControl(),

    orderDates: new FormControl(),
    deliveryDate: new FormControl(),
    suplierPaymentDate: new FormControl(),
    buyerPaymentDate: new FormControl(),
    fileUpload: new FormControl(),

    quantityFo: new FormControl(),
    quantityGo: new FormControl(),
    barging: new FormControl(),
    importPriceFo: new FormControl(),
    importPriceGo: new FormControl(),
  });

  handleClickEdit(id: number) {
    const data = this.datalist[id];
    this.datalist[id] = { ...data, Edit: true };
  }
  handleClickDelete(id: number) {
    this.datalist = this.datalist.filter((item: any) => {
      return item.id !== id;
    });
    console.log(id);
  }

  onSubmit(bunkeringForm: any) {
    console.log('submit', bunkeringForm.value);
    console.log('ádsadsadsadasdsad', this.newBunkering);
    // console.log('first', this.customers);
    this.customers = this.newBunkering.push(bunkeringForm.value);
    this.route.navigate(['/bunkering']);
  }
}
