import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AddProductsComponent } from './albaseet/add-products/add-products.component';

import { RequstComponent } from './albaseet/requst/requst.component';
import { AddrequstComponent } from './albaseet/addrequst/addrequst.component';
import { InviceComponent } from './albaseet/invice/invice.component';

import { PymontComponent } from './albaseet/pymont/pymont.component';
import { DetialsPaymontComponent } from './albaseet/detials-paymont/detials-paymont.component';
import { DashboraHomeComponent } from './albaseet/dashbora-home/dashbora-home.component';
import { ChartlistComponent } from './albaseet/chartlist/chartlist.component';
import { AddCustomersComponent } from './albaseet/add-customers/add-customers.component';
import { HttpClientModule } from '@angular/common/http';

import { ViewCustomerComponent } from './albaseet/view-customer/view-customer.component';
import { ViewProductComponent } from './albaseet/view-product/view-product.component';
import { LoginAppUserComponent } from './Amin/login-app-user/login-app-user.component';
import { CharlistComponent } from './charlist/charlist.component';
import { CreatAccountTabbiComponent } from './albaseet/creat-account-tabbi/creat-account-tabbi.component';


import { FooterMenuComponent } from './albaseet/footer-menu/footer-menu.component';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { ViewRecipteComponent } from './albaseet/view-recipte/view-recipte.component';
import { UpdateProductComponent } from './albaseet/update-product/update-product.component';
import { ViewCustomer1Component } from './albaseet/customer/view-customer1/view-customer1.component';
import { ViewCustomer2Component } from './albaseet/customer/view-customer2/view-customer2.component';
import { ViewCustomer3Component } from './albaseet/customer/view-customer3/view-customer3.component';
import { ViewProduct1Component } from './albaseet/product/view-product1/view-product1.component';

import { PaidCashComponent } from './albaseet/paid-cash/paid-cash.component';
import { CreditSalesComponent } from './albaseet/credit-sales/credit-sales.component';
import { GrudesService } from './dashbordserv/grudes.service';
import { AddPymentMethodComponent } from './albaseet/add-pyment-method/add-pyment-method.component';
import { MySettingComponent } from './albaseet/my-setting/my-setting.component';
import { AbouteCompanyComponent } from './albaseet/aboute-company/aboute-company.component';
import { ConcetionCompanyComponent } from './albaseet/concetion-company/concetion-company.component';
import { ChartInvioceComponent } from './albaseet/chart-invioce/chart-invioce.component';






export function tokenGetter() {
  
    return localStorage.getItem("token");
  }




@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavBarComponent,
        HomeComponent,
        AddProductsComponent,
        ChartlistComponent,
        RequstComponent,
        AddrequstComponent,
        InviceComponent,
    
        PymontComponent,
        DashboraHomeComponent,
        DetialsPaymontComponent,
        AddCustomersComponent,
     
        ViewCustomerComponent,
              ViewProductComponent,
              LoginAppUserComponent,
              CharlistComponent,
              CreatAccountTabbiComponent,
          
              CreditSalesComponent,
             FooterMenuComponent,
              HomeComponent,
            UpdateProductComponent,
              ViewRecipteComponent,
              ViewCustomer1Component,
              ViewCustomer2Component,
              ViewCustomer3Component,
              ViewProduct1Component,
           
              PaidCashComponent,
           AddPymentMethodComponent,
           MySettingComponent,
           AbouteCompanyComponent,
           ConcetionCompanyComponent,
           ChartInvioceComponent
           
              
       
              

    ],
    providers: [GrudesService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
       
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["localhost:44389"],
            disallowedRoutes: []
          }
      }),
   

    ]
})
export class AppModule {
   
 }
