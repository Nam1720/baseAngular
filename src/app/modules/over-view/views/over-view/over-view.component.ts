import { Component, OnInit } from '@angular/core';

import { ConfigTableCol } from 'src/app/shared/components/niw-table/interface/table.interface';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {
  colTable: ConfigTableCol[] = [
    {
      key: 'code',
      thead: {
        name: 'Mã SP',
        isFilter: true,
        rowspan: 2,
      },
      tbody: {
        isFilterChild: true
      }
    },
    {
      key: 'name',
      thead: {
        name: 'Tên - ký hiệu sản phẩm/BTP',
        isFilter: true,
        rowspan: 2,
      }
    },
    {
      key: 'description',
      thead: {
        name: 'Description',
        isFilter: true,
        rowspan: 2,
      }
    },
    {
      key: 'px',
      thead: {
        name: 'PX',
        rowspan: 2,
      }
    },
    {
      key: 'nameNC',
      thead: {
        name: 'Tên NC',
        rowspan: 2,
        isFilter: true
      },
      tbody: {
        type: 'select',
        typeSelectOption: {
          label: 'name', 
          dataList: [
            { id: 1, name: 'Nguyễn A', value: 'Nguyễn A'},
            { id: 2, name: 'Nguyễn B', value: 'Nguyễn B'},
            { id: 3, name: 'Nguyễn C', value: 'Nguyễn C'},
          ]
        } 
      }
    },
    {
      key: 'deviceName',
      thead: {
        name: 'Tên thiết bị',
        rowspan: 2,
      },
      tbody: {
        select: {
          menus: [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }],
          linkApi: '',
          isShowCheckBox: true,
        },
        type: 'input'
      }
    },
    {
      key: 'kh',
      thead: {
        name: 'KH/TH',
        rowspan: 2,
      },
      tbody: {
        select: {
          menus: [{ id: 1, name: 'Option KH 1' }, { id: 2, name: 'Option KH 2' }],
          linkApi: '/api/kh-list',
          isShowCheckBox: true
        },
        type: 'date'
      }
    },
    {
      key: '',
      thead: {
        name: 'Dự kiến giao hàng',
        colspan: 3
      },
      children: [
        {
          key: 'productivity',
          thead: {
            name: 'Năng suất',
            isFilter: true
          },
          tbody: {
            type: 'number'
          }
        },
        {
          key: 'sxthang',
          thead: {
            name: 'KH SX tháng'
          },
          tbody: {}
        },
        {
          key: 'ton',
          thead: {
            name: 'Tồn 1/1'
          },
          tbody: {}
        }
      ]
    },
    {
      key: 'tongkh',
      thead: {
        name: 'Tổng KH',
        rowspan: 2,
      }
    }
  ];

  colTableExpend: ConfigTableCol[] = [
    {
      key: 'code',
      thead: {
        name: 'Mã SP',
      }
    },
    {
      key: 'name',
      thead: {
        name: 'Tên - ký hiệu sản phẩm/BTP',
      }
    },
    {
      key: 'description',
      thead: {
        name: 'Description',
      }
    },
    {
      key: 'px',
      thead: {
        name: 'PX',
      }
    },
    {
      key: 'nameNC',
      thead: {
        name: 'Tên NC',
      }
    },
    {
      key: 'deviceName',
      thead: {
        name: 'Tên thiết bị',
      }
    },
    {
      key: 'kh',
      thead: {
        name: 'KH/TH',
      }
    },
    {
      key: 'productivity',
      thead: {
        name: 'Dự kiến giao hàng',
      }
    },
    {
      key: 'tongkh',
      thead: {
        name: 'Tổng KH',
      }
    }
  ];

  dataTable: any[] = [
    {
      id: 1,
      code: '800011625',
      name: '14105B-GCC-3000',
      description: 'hah',
      px: 'REN',
      nameNC: 'Dap tan',
      deviceName: 'MC851',
      kh: 'KH',
      productivity: 30000,
      sxthang: 500000,
      ton: 20000,
      tongkh: 600000,
      days: [100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000],
      children: [
        {
          id: 11,
          code: '800011622',
          name: '14105B-GCC-2000',
          description: 'hah1',
          px: 'REN1',
          nameNC: 'Dap tan1',
          deviceName: 'MC851',
          kh: 'KH',
          productivity: 30000,
          sxthang: 500000,
          ton: 20000,
          tongkh: 600000,
          days: [100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000],
        },
        {
          id: 12,
          code: '800011623',
          name: '14105B-GCC-2000',
          description: 'hah1',
          px: 'REN1',
          nameNC: 'Dap tan1',
          deviceName: 'MC851',
          kh: 'KH',
          productivity: 30000,
          sxthang: 500000,
          ton: 20000,
          tongkh: 600000,
          days: [100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000],
        }
      ]
    },
    {
      id: 2,
      code: '800011625',
      name: '14105B-GCC-3000',
      description: 'g',
      px: 'REN',
      nameNC: 'Dap tan',
      deviceName: 'MC851',
      kh: 'KH',
      productivity: 30000,
      sxthang: 500000,
      ton: 20000,
      tongkh: 600000,
      days: [100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000],
      children: [
        {
          id: 21,
          code: '800011622',
          name: '14105B-GCC-2000',
          description: '',
          px: 'REN1',
          nameNC: 'Dap tan1',
          deviceName: 'MC851',
          kh: 'KH',
          productivity: 30000,
          sxthang: 500000,
          ton: 20000,
          tongkh: 600000,
          days: [100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000],
        },
        {
          id: 22,
          code: '800011623',
          name: '14105B-GCC-2000',
          description: 'hah1',
          px: 'REN1',
          nameNC: 'Dap tan1',
          deviceName: 'MC851',
          kh: 'KH',
          productivity: 30000,
          sxthang: 500000,
          ton: 20000,
          tongkh: 600000,
          days: [100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000, 100000, 200000, 400000, 200000, 300000, 150000],
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
