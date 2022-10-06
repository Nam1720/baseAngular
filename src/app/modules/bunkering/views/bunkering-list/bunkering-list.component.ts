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
  customers = dataCustomer;

  // customers: Customer[];
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
    // customers = dataCustomer;
    // this.customerService.getCustomersLarge().then((customers) => {
    //   this.customers = customers;
    //   this.loading = false;
    // });
    this.statuses = [
      { label: 'completed', value: 'completed' },
      { label: 'Inprogress', value: 'Inprogress' },
      { label: 'Waiting', value: 'Waiting' },
      { label: 'reject', value: 'Reject' },
    ];
    this.primengConfig.ripple = true;
  }
  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);
      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
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
