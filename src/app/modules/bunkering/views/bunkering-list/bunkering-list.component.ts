import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from './../../interface/bunkering.customer';
import { CustomerService } from './../../services/bunkering.services';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { dataCustomer } from '../../services/dataCustomer';

@Component({
  selector: 'app-bunkering-list',
  templateUrl: './bunkering-list.component.html',
  styleUrls: ['./bunkering-list.component.scss'],
})
export class BunkeringListComponent {
  customers: Customer[] = dataCustomer;
  selectedCustomers: Customer[];
  representatives: Representative[];
  statuses: any[];
  loading: boolean = false;
  @ViewChild('dt') table: Table;
  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit() {
    this.statuses = [
      { label: 'Completed', value: 'Completed' },
      { label: 'Inprogress', value: 'Inprogress' },
      { label: 'Waiting', value: 'Waiting' },
      { label: 'reject', value: 'Reject' },
    ];
    this.primengConfig.ripple = true;
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }
  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return date.getFullYear() + '-' + month + '-' + day;
  }
  onRepresentativeChange(event: any) {
    this.table.filter(event.value, 'representative', 'in');
  }
}
