import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import Swal from 'sweetalert2';
import { customer } from '../models/customers';
import { payment_method } from '../models/payment_method';

@Component({
  selector: 'app-add-pyment-method',
  templateUrl: './add-pyment-method.component.html',
  styleUrls: ['./add-pyment-method.component.css']
})
export class AddPymentMethodComponent {

  constructor(
    private fb: FormBuilder,
    private services: MyservcesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  customerForm!: FormGroup;;
  message: string;
  id: number;
  img: File;
  btnTitle: string;
  title: string;
  IsEditMode: boolean;
  urlIamge: string;
  payment: payment_method;
  customer: customer[];
  isbusy: boolean;
  //editdoctorData: EditDoctorModel;
  //doctorData: DoctorModel;



  messageValidate = {
    payment_ar: {
      required: ' اسم العميل مطلوب!',
    },
    payment_en: {
      required: ' required username!',
    },

  };

  ngOnInit(): void {

    this.title = 'اضافة طريقه دفع جديده';
    this.btnTitle = 'اضافة';
    this.id = 0;
    // this.img = '' as unknown as File
    this.customer = [];
    this.message = '';
    this.urlIamge = 'assets/images/Add.png';

this.payment={
 
 payment_ar:'',
 payment_en:''
}

    this.customerForm = this.fb.group({
      payment_ar: ['', Validators.required],
      payment_en: ['', Validators.required],
    
   
    });


    this.activeRoute.paramMap.subscribe(param => {
      var id = Number(param.get('id'));
      if (id) {
        this.services.Getcustomer(id).subscribe(customer => {
          console.log(customer);
          this.title = 'تعديل بيانات عميل';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id = id;
          this.customerForm.patchValue({
            customernameRr: customer.customer_aname,
            customernameEn: customer.customernameEn,
          


          })
        })
      }
    })
  }


  Addcustmer() {

    if (this.customerForm.valid) {
      const fd = new FormData();
      // الباراميتر الاول يمثل اسم المفتاح المرسل وقيمته قيمة الملف المتمثل في الصوره
    
    
      if (this.id > 0) {
      
        // // this.customers.customer_id=this.id;
        // // this.customers.customernameRr = this.customerForm.value.customer_aname;
       
        // // this.customers.customernameEn = this.customerForm.value.customernameEn;
        // // this.customers.customer_mobile = this.customerForm.value.mobile;
     
        // this.services.Editcustomer(this.customers).subscribe((doctor: any) => {
        //   Swal.fire('تمت العمليه!', '  تم تعديل البيانات بنجاح', 'info')
         
        
        // }, (ex: any) => {
        //   console.log(ex.error);
        //   this.message = '';
        // })

      }
       else {
       this.ValidateModel();
        this.services.AddpaymentMethod(this.payment).subscribe((doctor: any) => {
          sessionStorage.setItem("addcustomer","true");
        
           this.ngOnInit();
           Swal.fire('خطاء!', '  تم اضافه بيانات العميل بنجاح', 'info')

        }, (ex: any) => {
       console.log(ex);
          
        })

      }

    }

  }

  GoToList() {
    sessionStorage.setItem('customer', 'customer');
    this.router.navigate(['Dashborad']);
  }

  GetAllcustmer() {
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

  ValidateModel() {
    this.payment.payment_ar = this.customerForm.value.payment_ar;
    this.payment.payment_en = this.customerForm.value.payment_en;
   
   
   
  }


}

