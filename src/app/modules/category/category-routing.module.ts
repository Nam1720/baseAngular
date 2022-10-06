import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service'
import { CategoryLaborComponent } from './views/category-labor/category-labor.component';
import { CategoryCustomerComponent } from './views/category-customer/category-customer.component';
import { CategoryProductComponent } from './views/category-product/category-product.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        component: CategoryProductComponent,
        data: {
          breadcrumbs: [
            { label: 'Danh mục sản phẩm', url: 'product' }
          ],
        },
        canActivate: [AuthGuardService]
      },
      {
        path: 'labor',
        component: CategoryLaborComponent,
        data: {
          breadcrumbs: [
            { label: 'Danh mục nhân công', url: 'labor' }
          ],
        },
        canActivate: [AuthGuardService]
      },
      {
        path: 'customer',
        component: CategoryCustomerComponent,
        data: {
          breadcrumbs: [
            { label: 'Danh mục khách hàng', url: 'customer' }
          ],
        },
        canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
