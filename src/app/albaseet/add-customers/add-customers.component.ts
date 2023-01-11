import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import Swal from 'sweetalert2';

import { customer } from '../models/customers';




@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {




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
  customers: customer;
  customer: customer[];
  customer1: any
  isbusy: boolean;
  custmer_name:string;

  //editdoctorData: EditDoctorModel;
  //doctorData: DoctorModel;
  storedata: any


  messageValidate = {
    customer_aname: {
      required: ' اسم العميل مطلوب!',
    },
    customernameEn: {
      required: ' required username!',
    },
    address: {
      required: ' الرجاء ادخال العنوان!',
    },
    country: {
      required: ' بلد العميل مطلوب..!',
    },


    mobile: {
      required: 'رقم الهاتف مطلوب..!',
    }
  };

  ngOnInit(): void {
    this.storedata ;

this.custmer_name=''


    this.customer1 = {
      customer_id: 0,
      customer_aname: '',
      customernameRr: '',
      customernameEn: '',
      customer_address: '',
      customer_country: '',
      customer_city: '',
      customer_state: '',
      customer_postcode: '',
      customer_taxid: 0,
      invoices_count: 0,
      receipts_amount: 0,
      user_id: 0,

      customer_mobile: '',
    }
    this.title = 'اضافة عميل جديد';
    this.btnTitle = 'اضافة';
    this.id = 0;
    // this.img = '' as unknown as File
    this.customer = [];
    this.message = '';
    this.urlIamge = 'assets/images/Add.png';

    this.customers = {
      customer_id: 0,
      customer_aname: '',
      customernameRr: '',
      customernameEn: '',
      customer_address: '',
      customer_country: '',
      customer_city: '',
      customer_state: '',
      customer_postcode: '',
      customer_taxid: 0,
      invoices_count: 0,
      receipts_amount: 0,
      user_id: 0,

      customer_mobile: '',
    }

    this.customerForm = this.fb.group({
      customer_aname: ['', Validators.required],
      customernameEn: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      country: ['', Validators.required],


    });


    this.activeRoute.paramMap.subscribe(param => {
      var id = Number(param.get('id'));
      if (id) {
        this.services.Getcustomer(id).subscribe((customer: any) => {
          this.storedata = customer.data;
          this.customer1 = this.storedata.filter((x: any) => x.customer_id === id)
          console.log(this.customer1);
          this.title = 'تعديل بيانات عميل';
          this.btnTitle = 'تعديل وحفظ';
          this.IsEditMode = true;
          this.id = id;
       for(var item of this.customer1){
      this.custmer_name=item.customer_aname
    
       }
       
          this.customerForm.patchValue({
            customer_aname: this.custmer_name,
            address: customer.data.customer_address,
            mobile: customer.data.customer_mobile,
            country: customer.data.customer_country,
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

        this.customers.customer_id = this.id;
        this.customers.customernameRr = this.customerForm.value.customer_aname;
        this.customers.customer_aname = this.customerForm.value.customer_aname;
        this.customers.customernameEn = this.customerForm.value.customernameEn;
        this.customers.customer_mobile = this.customerForm.value.mobile;
        this.customers.customer_address = this.customerForm.value.address;
        this.customers.customer_country = this.customerForm.value.country;

        this.services.Editcustomer(this.customers).subscribe((doctor: any) => {
          Swal.fire('تمت العمليه!', '  تم تعديل البيانات بنجاح', 'info')


        }, (ex: any) => {
          console.log(ex.error);
          this.message = '';
        })

      } else {
        this.ValidateModel();
        this.services.Addcustomermodel(this.customers).subscribe((doctor: any) => {
          sessionStorage.setItem("addcustomer", "true");

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
    this.customers.customernameRr = this.customerForm.value.customer_aname;
    this.customers.customer_aname = this.customerForm.value.customer_aname;
    this.customers.customernameEn = this.customerForm.value.customernameEn;
    this.customers.customer_mobile = this.customerForm.value.mobile;
    this.customers.customer_address = this.customerForm.value.address;
    this.customers.customer_country = this.customerForm.value.country;

  }


}
