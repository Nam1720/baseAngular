import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductDetail } from '../../../interfaces/category-product'
import { CategoryProductService } from '../../../services/category-product.service'
import { MenuActionTable } from 'src/app/shared/components/action-table/menu-action-table';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-category-product-table',
  templateUrl: './category-product-table.component.html',
  styleUrls: ['./category-product-table.component.scss']
})
export class CategoryProductTableComponent implements OnInit {
  visibleModalEdit: boolean = false;
  items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Open', icon: 'pi pi-fw pi-download'},
    {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  ];
  menuAction: MenuActionTable[] = [
    {
      id: 1,
      name: 'Thêm nguyên công',
      icon: '',
      active: true
    },
    {
      id: 2,
      name: 'Sửa kho',
      icon: '',
      active: true
    },
    {
      id: 3,
      name: 'Xóa',
      icon: '',
      active: true
    }
  ];
  constructor(
    public categoryProductService: CategoryProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  onHandleDelete(item: ProductDetail) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xóa nhân công?',
      accept: () => {
        this.messageService.add({ severity: 'success', detail: 'Xóa nhân công thành công' });
      }
  });
  };

  onHandleEdit(item: ProductDetail) {
    this.visibleModalEdit = true;
  };

}
