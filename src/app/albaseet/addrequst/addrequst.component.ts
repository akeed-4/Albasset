import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import { customer } from '../models/customers';
import { products } from '../models/products';

@Component({
  selector: 'app-addrequst',
  templateUrl: './addrequst.component.html',
  styleUrls: ['./addrequst.component.css']
})
export class AddrequstComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private services: MyservcesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  RequestForm!: FormGroup;;
  message: string;
  id: number;
  img: File;
  btnTitle: string;
  title: string;
  IsEditMode: boolean;
  urlIamge: string;
  customers: customer;
  product:products[];
  customer: customer[];
  isbusy: boolean;
  //editdoctorData: EditDoctorModel;
  //doctorData: DoctorModel;



  messageValidate = {
    customername: {
      required: ' اسم العميل مطلوب!',
    },
   
    
    quantity: {
      required: 'رقم الهاتف مطلوب..!',
    }
  };

  ngOnInit(): void {
    this.title = 'اضافة طلب جديد';
    this.btnTitle = 'اضافة';
    this.id = 0;
    this.img = '' as unknown as File
    this.customer = [];
    this.product=[];
    this.message = '';
    this.urlIamge = 'assets/images/Add.png';



    this.RequestForm = this.fb.group({
      quantity: ['', Validators.required],
     
   
    });


    this.activeRoute.paramMap.subscribe(param => {
      var id = Number(param.get('id'));
      if (id) {
        this.services.postRequset(id).subscribe(request => {
          this.title = 'تعديل بيانات عميل';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id = id;
          this.RequestForm.patchValue({
            productsname: request.productsname,
            quantity: request.quantity,
      
          })
        })
      }
    })
  }
  arrS:number[]=[];
 
  AddRequset() {

    if (this.RequestForm.valid) {
      const fd = new FormData();
      // الباراميتر الاول يمثل اسم المفتاح المرسل وقيمته قيمة الملف المتمثل في الصوره
      fd.append('productsId', this.RequestForm.value.productsId);
      fd.append('quantity', this.RequestForm.value.quantity);
     
      if (this.id > 0) {
        fd.append('customerId', this.id.toString());
        this.services.Editcustomer(this.customers).subscribe((doctor: any) => {
          this.message = 'تمت عملية التعديل بنجاح';
          this.GoToList();
        }, (ex: any) => {
          console.log(ex);
          this.message = '';
        })

      } else {
        this.services.AddRequest(fd).subscribe((doctor: any) => {
          this.ngOnInit();
          this.message = 'تمت اضافة بيانات العميل بنجاح';
        }, (ex: any) => {
          console.log(ex);
          this.message = '';
        })

      }

    }

  }
  arrcustomer:products[];
  changeWebsiteproducts( e:any){
    this.product=[];
    this.services.GetAllproduct
    ().subscribe((list:products[])=>
    {
    this.product=list;
    console.log(this.arrcustomer)

    },e=>{
      console.log(e.console.error);

    });


  }
  GoToList() {
    sessionStorage.setItem('customer', 'customer');
    this.router.navigate(['/controlpanel']);
  }

  GetAllDoctors() {
    this.services.GetAllcustmers().subscribe((list) => {
      this.customer = list;
    }, ex => console.log(ex));
  }

  HandleFiles(event: any) {
    if (event.target.files !== null && event.target.files.length > 0) {
      this.img = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#image').attr('src');
      }
      reader.readAsDataURL(this.img);
    } else {
      this.img == null;
      $('#image').attr('src', 'assets/Images/Add.png');
    }

  }

}

