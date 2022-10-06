import {Component, OnInit} from '@angular/core';
import {ConfigColumn} from '../../../../../shared/components/custom-table/custom-table.model';
import {CustomTableService} from '../../../../../shared/services/custom-table.service';

@Component({
  selector: 'app-plan-month-list',
  templateUrl: './plan-month-list.component.html',
  styleUrls: ['./plan-month-list.component.scss'],
})
export class PlanMonthListComponent implements OnInit {
  columns: ConfigColumn[] = [
    {
      name: 'check',
      id: 'check',
      sort: '',
      fixed: false,
      isInput: false,
    },
    {
      name: 'Mã SP',
      id: 'productId',
      sort: '',
      isInput: false,
      fixed: false,
    },
    {
      name: 'Tên - ký hiệu sản phẩm - BTC',
      id: 'name',
      sort: '',
      isInput: false,
      fixed: false,
      width: 5,
    },
    {
      name: 'Chuyên viên phụ trách',
      id: 'supporter',
      sort: '',
      isInput: false,
      fixed: false,
      isSelect: true,
    },
    {
      name: 'Nơi SX',
      id: 'address',
      sort: '',
      isInput: false,
      fixed: false,
    },

    {
      name: 'Dự kiến giao hàng',
      id: 'delivery',
      sort: '',
      isInput: false,
      fixed: false,
      colChildren: [
        {
          name: 'Trong tháng',
          id: '1',
          sort: '',
        },
        {
          name: 'Tháng kế tiếp',
          id: '3',
          sort: '',
        },
      ],
    },
    {
      name: 'Tồn đầu',
      id: 'sfd',
      fixed: false,
      sort: '',
      isInput: false,
    },
    {
      name: 'Tổng nhập trước',
      id: 'sfd',
      fixed: false,
      sort: '',
      isInput: false,
    },
    {name: '01', id: '01', fixed: false, sort: '', isInput: true},
  ];

  constructor(private customTableService: CustomTableService<any>) {
  }

  ngOnInit(): void {
    this.customTableService.getOptionSelect();
    this.customTableService.getData();
  }

  getData() {
    return this.customTableService.data;
  }

  getOpt() {
    return this.customTableService.option;
  }
}
