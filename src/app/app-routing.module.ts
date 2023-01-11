import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteCompanyComponent } from './albaseet/aboute-company/aboute-company.component';
import { AddCustomersComponent } from './albaseet/add-customers/add-customers.component';
import { AddProductsComponent } from './albaseet/add-products/add-products.component';
import { ConcetionCompanyComponent } from './albaseet/concetion-company/concetion-company.component';

import { CreatAccountTabbiComponent } from './albaseet/creat-account-tabbi/creat-account-tabbi.component';
import { ViewCustomer1Component } from './albaseet/customer/view-customer1/view-customer1.component';
import { DetialsPaymontComponent } from './albaseet/detials-paymont/detials-paymont.component';
import { FooterMenuComponent } from './albaseet/footer-menu/footer-menu.component';
import { InviceComponent } from './albaseet/invice/invice.component';
import { MySettingComponent } from './albaseet/my-setting/my-setting.component';
import { PaidCashComponent } from './albaseet/paid-cash/paid-cash.component';
import { UpdateProductComponent } from './albaseet/update-product/update-product.component';
import { ViewCustomerComponent } from './albaseet/view-customer/view-customer.component';
import { LoginAppUserComponent } from './Amin/login-app-user/login-app-user.component';
import { CharlistComponent } from './charlist/charlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrudesService } from './dashbordserv/grudes.service';






const routes: Routes = [
  {path:'',component:LoginAppUserComponent,pathMatch:'full'},
  {path:'login',component:LoginAppUserComponent},
  {path:'Dashborad',component:DashboardComponent,canActivate:[GrudesService]},
  {path:'Addproduct/:id',component:AddProductsComponent},
  {path:'Addproduct',component:AddProductsComponent},
  {path:'CreatAccountTabbi',component:CreatAccountTabbiComponent},
  {path:'detailspaymont',component:DetialsPaymontComponent},


  {path:'footer',component:FooterMenuComponent},
  {path:'Addcustomer/:id',component:AddCustomersComponent},
  {path:'Addcustomer',component:AddCustomersComponent},
  {path:'listcustomer',component:ViewCustomerComponent},
  {path:'updateproduct/:id',component:UpdateProductComponent},
  {path:'view_customer1',component:ViewCustomer1Component},
  {path:'paid_cash',component:PaidCashComponent},
  {path:'invice',component:InviceComponent},
  {path:'mysetting',component:MySettingComponent},
  {path:'aboute',component:AbouteCompanyComponent},
  {path:'concceion_company',component:ConcetionCompanyComponent},
  {path:'cherlist',component:CharlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
