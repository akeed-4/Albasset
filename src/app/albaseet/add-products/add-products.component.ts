import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import Swal from 'sweetalert2';

import { products } from '../models/products';



@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    private service:MyservcesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  productForm:FormGroup
  message: string;
  btnTitle: string;
  title: string;
  id: number;
  img: File;
  storedata: any
  productsMod: products;
  IsEditMode: boolean;
  product: products[];
  urlIamge: string;
  isbusy: boolean;
  products:products;
productstorage:any
product_name:string
  messageValidate ={
    productsnameAr: {
      required:' اسم الصنف مطلوب!',
    },
   
    productsnameEn: {
      required:'required product name ',
    },
    
   
    price: {
      required:'السعر  مطلوب..!',
    },
    Images: {
      required:'الرجاء ملئ الحقل ..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة صنف جديد';
    this.btnTitle = 'اضافة';
    this.message = '';
    this.id = 0;
    this.img =null;
    this.product = [];
    this.urlIamge = '/assets/imges/logo.png';
this.  storedata;
this.productstorage;
this.product_name=''
    this.productForm=this.fb.group({
      productsnameAr: ['', Validators.required],
      productsnameEn:['', Validators.required],
      price:['', Validators.required],
    
      Images: [null]
    });
this.products={
  new_item:0,
  product_ename:'',

  product_id:'',
  product_aname:'',
  productsnameAr:'',
  productsnameEn:'strin',
  product_image:'',
  quantity:0,

  price:0,
  description:''

}
    this.activeRoute.paramMap.subscribe(param => {
      const id = Number( param.get('id')) ;
      console.log(id);
      if (id) {
        this.service.Getproduct( id).subscribe((productsMod :any)=> {
          this.storedata = productsMod.data;
          this.productstorage = this.storedata.filter((x: any) => x.product_id === id)
          console.log(  this.product_name)
          this.title = 'تعديل بيانات صنف';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id= id;
          for(var item of this.productstorage){
            this.product_name=item.product_aname
          console.log(  this.product_name)
             }
          this.productForm.setValue({
            productsnameAr:  this.product_name,
            productsnameEn:productsMod.productsnameEn,
            price: productsMod.price,
            Images: productsMod.product_image,
       
          })
      
        })
      }
 
    })
  }

  Addproduct() {
    if (this.productForm.valid) {
     
          this.ValidateModel();
          this.service.AddproductMod(this.products).subscribe((product:any) => {
          
            this.ngOnInit();
            Swal.fire('تمت العمليه!', '  تم اضافه بيانات الصنف بنجاح', 'info')
          }, ex => {
            console.log(ex);
            this.message = '';
          })
        }

       }

   

   GoToList() {
    sessionStorage.setItem('product', 'product');
    this.router.navigate(['Dashborad']);
  }

  GetAllHospitals() {
    
    this.service.GetAllproduct().subscribe((list) => {
      this.product = list;
    }, ex=>console.log(ex));
  }

  // دالة التعامل مع الصوره
HandleFiles(event: any) {
  if (event.target.files !== null &&  event.target.files.length > 0  ) {
    this.img = event.target.files[0];
   
    const reader = new FileReader();
 
    reader.onload= function(e){
      const csv = reader.result;
       $('#image').attr('src', e.target.result.toString()) ;
    }
    reader.readAsDataURL(this.img);
  } else
   {
    this.img== null;
    $('#image').attr('src', '/assets/imges/logo.png') ;
   }

}
ValidateModel() {
 
  this.products.product_aname = this.productForm.value.productsnameAr;
  this.products.product_ename = this.productForm.value.productsnameEn;

  this.products.price = this.productForm.value.price  ;
  this.products.product_image = this.productForm.value.Images;
  this.products.new_item = 0 ;
  this.products.product_id = "3" 
}
}

