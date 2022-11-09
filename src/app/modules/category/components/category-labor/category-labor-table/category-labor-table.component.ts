import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryLaborService } from '../../../services/category-labor.service';
import { LaborDetail } from '../../../interfaces/category-labor';
@Component({
  selector: 'app-category-labor-table',
  templateUrl: './category-labor-table.component.html',
  styleUrls: ['./category-labor-table.component.scss']
})
export class CategoryLaborTableComponent implements OnInit {

  visibleModalEdit: boolean = false;

  constructor(
    public categoryLaborService: CategoryLaborService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  onHandleDelete(item: LaborDetail) {
    console.log('item: ', item);
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xóa nhân công?',
      accept: () => {
        console.log('xóa');
        this.messageService.add({ severity: 'success', detail: 'Xóa nhân công thành công' });
      }
  });
  };

  onHandleEdit(item: LaborDetail) {
    this.visibleModalEdit = true;
  };


}
