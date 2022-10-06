import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ImageModule } from 'primeng/image';


import { CategoryRoutingModule } from './category-routing.module';
import { CategoryLaborComponent } from './views/category-labor/category-labor.component';
import { CategoryCustomerComponent } from './views/category-customer/category-customer.component';
import { CategoryLaborTableComponent } from './components/category-labor/category-labor-table/category-labor-table.component';
import { CategoryLaborFilterComponent } from './components/category-labor/category-labor-filter/category-labor-filter.component';
import { ModalAddCategoryLaborComponent } from './components/category-labor/modal-add-category-labor/modal-add-category-labor.component';
import { CategoryProductComponent } from './views/category-product/category-product.component';
import { CategoryProductFilterComponent } from './components/category-product/category-product-filter/category-product-filter.component';
import { CategoryProductTableComponent } from './components/category-product/category-product-table/category-product-table.component';
import { ModalDetailCategoryProductComponent } from './components/category-product/modal-detail-category-product/modal-detail-category-product.component';
import { ModalAddProductComponent } from './components/category-product/modal-add-product/modal-add-product.component';
import { FormTableAddProductComponent } from './components/category-product/form-table-add-product/form-table-add-product.component';


@NgModule({
  declarations: [
    CategoryLaborComponent,
    CategoryCustomerComponent,
    CategoryLaborTableComponent,
    CategoryLaborFilterComponent,
    ModalAddCategoryLaborComponent,
    CategoryProductComponent,
    CategoryProductFilterComponent,
    CategoryProductTableComponent,
    ModalDetailCategoryProductComponent,
    ModalAddProductComponent,
    FormTableAddProductComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    RadioButtonModule,
    ImageModule
  ]
})
export class CategoryModule { }
