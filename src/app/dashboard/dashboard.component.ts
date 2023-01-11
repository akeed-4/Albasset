import { Component } from '@angular/core';
import * as $ from 'jquery';
import { customer } from '../albaseet/models/customers';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor() { }
  customer_aname:any;
  customer:customer[];
  isUserList!: boolean;
  isAddUser!: boolean;
  isproductslist!: boolean;
  isAddhospital!: boolean;
  isDepartmentList!: boolean;
  isAdddepartment!: boolean;
  isAddPatient!: boolean;
   ischratlist!:boolean
  
  isUserRoleList!: boolean;
  isPatientList!: boolean;
  isCustomerList!: boolean;
  isAddcustomer!: boolean;
  isInvice!:boolean;
  isaaddOreder!:boolean;
  isdivbar!:boolean;
  isinvicese!:boolean;
  ispaymont!:boolean
ispaymontinvice!:boolean
ischarlist:boolean;
isrecipte:boolean;
islistcustomer1:boolean;
islistcustomer2:boolean;
islistcustomer3:boolean;
islistproduct:boolean;
ispaymontcredit:boolean;
ispaymontMehod:boolean


  ngOnInit(): void {
    this.customer=[];
    this.ischratlist=false
    this.islistcustomer1=false;
    this.islistcustomer2=false;
    this.islistcustomer3=false;
    this.customer_aname='';
    this.ispaymontcredit=false
    this.islistproduct=false;
    this.ischarlist=false;
    this.isdivbar=false;
    this.isAddUser = false;
    this.isaaddOreder=false;
    this.isAddhospital = false;
    this.isAdddepartment = false;
    this.isUserList = false;
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isinvicese=false;
    this.isUserRoleList = false;
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.isCustomerList = false;
    this.isproductslist=false;
   this. ispaymont=false
this.isrecipte=false;
this.ispaymontMehod=false;
    


    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });


     if(sessionStorage.getItem("hospital"))
      {
        this.Checkproduct();
        sessionStorage.removeItem("hospital");

      }else if(sessionStorage.getItem("patient"))
      {
        this.CheckPatient();
        sessionStorage.removeItem("patient");

      }else if(sessionStorage.getItem("customer"))
      {
        this.Checkcustomer();
        sessionStorage.removeItem("customer");

      }else if(sessionStorage.getItem("users"))
      {
        this.CheckUser();
        sessionStorage.removeItem("users");

      }
      else if(
        sessionStorage.getItem("product"))
      {
        this.Checkproduct();
        sessionStorage.removeItem("product");

      }

  
  }

  methodcheck(){
    this.ispaymontMehod=false;
    this.isInvice=false;
    this.isAddUser = false;
    this.isAdddepartment = false;
    this.ispaymontcredit=false
    this.isproductslist = false;
    this.isDepartmentList = false;
    this.isUserRoleList = false;
    this.islistproduct=false
    this.ispaymontinvice=false;
    this.isrecipte=false
    this.isPatientList = false;
    this.isAddPatient = false;
    this.isAddcustomer = false;
    this.ischarlist=false;
    this.isCustomerList = false;
    this.isinvicese=false;
    this.ischratlist=false
    this.islistcustomer3=false
    this.islistcustomer2=false
    this.isaaddOreder=false;
    this.islistcustomer1=false
    this.ispaymont=false;
  }
  showlistcustomer(){
    this.methodcheck();
    
   
return  this.islistcustomer1=true;
  }

  showlist2customer(){
    this.methodcheck();
   
 return   this.islistcustomer2=true;
  }
  showlist3customer(){
    this.methodcheck();
    
    return   this.islistcustomer3=true;
  }


  showlist1produc(){
    this.methodcheck();
    this.islistcustomer1=false;
    this.isCustomerList=false;
    this.islistcustomer2=false;
    this.isproductslist = false;
     this.islistcustomer3=false;
     return     this.islistproduct=true
  }
  CheckUser(): boolean {
   this.methodcheck();
    return this.isUserList = true;
  }

  CheckUserRoleList(): boolean {
    this.methodcheck();
    return this.isUserRoleList = true;
  }

  Checkproduct(): boolean {
    this.methodcheck();
    return this.isproductslist = true;
    
  }

  CheckDepartment(): boolean {
    this.methodcheck();
    return this.isDepartmentList = true;
  
  }

  AddUser() {
    this.methodcheck();
    return this.isAddUser = true;
  }
  Checkorder(){
    this.methodcheck();
    
     return this.isInvice=true;
  }
  CheckReport(): boolean {
    this.methodcheck();
   return this.ischarlist=true;
    
  }
  SelectAll(){}
  AddOrder(){
    this.methodcheck();
     return this.isaaddOreder=true;
  }
  Add_paymeont(){
    this.methodcheck();
    return this.ispaymontMehod=true;
  }


  checkinvgice(){
    this.methodcheck();
    return this.isinvicese=true;
  }

  checkpeymont(){
    this.methodcheck();
     return this. ispaymont=true;
  }
  checkpeymont3(){
    this.methodcheck();
    return this. ischratlist=true;
  }

  Addproducts() {
    this.methodcheck();
    return this.isAddhospital = true;
  }

  Checkcustomer(): boolean{
    this.methodcheck();
    return this.isCustomerList = true;
  }

  Addcustomer() {
    this.methodcheck();
    return this.isAddcustomer = true;
  }

  Addinvice() {
    this.methodcheck();
    return this.isAdddepartment = true;
  }


  checkpeymont1(){
    this.methodcheck();
     return this.ispaymontinvice=true;
  }

  GoToListonvioce(){
    this.methodcheck();
    return  this.ispaymont=true;
  }

  checkpeymont2(){
    this.methodcheck();
     return this.ispaymontcredit=true;
  }
  checkrecipt(){
    this.methodcheck();
return this.isrecipte=true;
  }
  CheckPatient(): boolean {
    this.methodcheck();

    return this.isPatientList = true;
  }

  AddPatient() {
    this.methodcheck();
    return this.isAddPatient = true;
  }

}

