import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import { products } from '../models/products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

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
  id: string;
  img: File;
  productsMod: products;
  IsEditMode: boolean;
  product: products[];
  urlIamge: string;
  isbusy: boolean;
  products:products;

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
    this.title = 'تعديل بيانات صنف';
    this.btnTitle ='تعديل وحفظ';
    this.message = '';
    this.id = '';
    this.img =null;
    this.product = [];
    this.urlIamge = '/assets/imges/logo.png';


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
   

  }

  Addproduct() {
    this.activeRoute.paramMap.subscribe(param => {
      const id = String( param.get('id')) ;
      console.log(id);
    
 this.id=id;
    })
    if (this.productForm.valid) {
      this.products.product_id=this.id;
      this.products.product_aname = this.productForm.value.productsnameAr;
      this.products.product_ename = this.productForm.value.productsnameEn;
    
      this.products.price = this.productForm.value.price  ;
      this.products.product_image = this.productForm.value.Images;
      this.products.new_item = 0 ;
    
        if (this.id !=null) {
       
          this.service.Editproduct(this.products).subscribe(hospital => {
           this.message = 'تمت تعديل بيانات الصنف بنجاح';
           // this.GoToList();
          }, ex => {
            console.log(ex);
            this.message = '';
          })

        }

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

}
}



