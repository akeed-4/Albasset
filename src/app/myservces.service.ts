import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { approveinvice } from './albaseet/models/approveinvice';
import { customer } from './albaseet/models/customers';
import { inivce } from './albaseet/models/invice';
import { payment_method } from './albaseet/models/payment_method';
import { post } from './albaseet/models/post';
import { products } from './albaseet/models/products';
import { recipte } from './albaseet/models/recipte';
import { request } from './albaseet/models/request';

@Injectable({
  providedIn: 'root'
})
export class MyservcesService {

  [x: string]: any;

  private baseUrl = "https://localhost:44389/";
 
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    }),


 //   withCredentials: true,
  };
  constructor(private http: HttpClient) { }



  //datails product 
  Addproduct(formData: FormData) {
 
    return this.http.post(this.baseUrl + 'product/create', formData,).pipe();
  }
  AddproductMod(formData: products) {

    return this.http.post<products>(this.baseUrl + 'product/create', formData).pipe();
  }
  Editproduct(formData: products) {
  
    return this.http.post(this.baseUrl + 'product/update', formData, ).pipe();
  }


  Getproduct(id: number): Observable<products> {
    return this.http.get<products>(this.baseUrl + 'product/get_warehouse_products/' + id, this.headers).pipe();
  }

  GetAllproduct(): Observable<products[]> {
    return this.http.get<products[]>(this.baseUrl + 'product/get_warehouse_products', this.headers).pipe();
  }

 
  DeleteAllproducts(ids: string): Observable<products> {
  
    return this.http.delete<products>(this.baseUrl + '/DeleteAllHospitals/' + ids, this.headers).pipe();
  }

  Deleteproduct(ids: string[]): Observable<products[]> {
  
    return this.http.post<products[]>(this.baseUrl + 'product/DeleteHospitals', ids, this.headers).pipe();
  }





//details customers

  Getcustomer(id: number): Observable<customer> {
    return this.http.get<customer>(this.baseUrl + 'customers/get_customers/' + id, this.headers).pipe();
  }

  GetAllcustmers(): Observable<customer[]> {
   
    return this.http.get<customer[]>(this.baseUrl + 'customers/get_customers', this.headers).pipe();
  }
  Addcustomer(formData: FormData) {
   
    return this.http.post(this.baseUrl + '/AddDoctor', formData).pipe();
  }
  Addcustomermodel(formData: customer) {
    
    return this.http.post<customer>(this.baseUrl + 'customers/create', formData).pipe();
  }
  Editcustomer(formData: customer) {
  
    return this.http.post<customer>(this.baseUrl + 'customers/update', formData).pipe();
  }


  DeletAllcustomer(ids: string[]): Observable<customer[]> {
   
    return this.http.post<customer[]>(this.baseUrl + '/DeletAllDoctor', ids, this.headers).pipe();
  }



  GetAllrecipte(): Observable<recipte[]> {
   
    return this.http.get<recipte[]>(this.baseUrl + 'receipts/get_receipts', this.headers).pipe();
  }

  approverecipte(id: approveinvice){
    console.log(id)
     return this.http.post<approveinvice>(this.baseUrl + 'receipts/approve',id).pipe();
    
    }
    
    



  
  postRequset(id: number): Observable<request> {
    return this.http.get<request>(this.baseUrl + '/GetDoctor/' + id, this.headers).pipe();
  }
  Getinvices(id: number): Observable<inivce> {
    return this.http.get<inivce>(this.baseUrl + '/GetDoctor/' + id, this.headers).pipe();
  }

  GetAllInices(): Observable<inivce[]> {
    return this.http.get<inivce[]>(this.baseUrl + 'invoices/get_invoices', this.headers).pipe();
  }


  
approveInvioce(id: approveinvice){
console.log(id)
 return this.http.post<approveinvice>(this.baseUrl + 'invoices/approve',id).pipe();

}




  AddRequest(formData: FormData) {
    console.log(formData);
    return this.http.post(this.baseUrl + '/AddDoctor', formData).pipe();
  }

  Addinvice(formData: FormData) {
    console.log(formData);
    return this.http.post(this.baseUrl + '/Addinvice', formData, { withCredentials: true }).pipe();
  }



  AddpaymentMethod(formData: payment_method) {
    console.log(formData);
    return this.http.post<payment_method>(this.baseUrl + '/Addinvice', formData, { withCredentials: true }).pipe();
  }


  
//testin only

  Getpost(): Observable<post[]> {
    return this.http.get<post[]>(this.baseUrl + '/posts ', this.headers).pipe();
  }
  Deletepost(ids: string[]): Observable<post[]> {
    console.log(ids)
    return this.http.delete<post[]>(this.baseUrl + '/posts/1' + ids, this.headers).pipe();
  }
  Addppost(formData: post) {
    console.log(formData);
    return this.http.post<post>(this.baseUrl + '/posts', formData, { withCredentials: true }).pipe();
  }
  updateppost(formData: post) {
    console.log(formData);
    return this.http.put<post>(this.baseUrl + '/posts/1', formData, { withCredentials: true }).pipe();
  }

}



