import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import { customer } from '../../models/customers';

@Component({
  selector: 'app-view-customer1',
  templateUrl: './view-customer1.component.html',
  styleUrls: ['./view-customer1.component.css']
})
export class ViewCustomer1Component {

  constructor(
    private router: Router,
    private servicess: MyservcesService,
    private activeRoute: ActivatedRoute,private fb: FormBuilder

  ) { }
  customer_aname:any;
  btnTitle:string
  productForm:FormGroup
  customers: customer [];
  customer:customer;
  //doctor: AddDoctorModel;
  num: number;
  message: string;
  messageValidate ={
    title: {
      required:' اسم الصنف مطلوب!',
    },
   
 
    body: {
      required:'السعر  مطلوب..!',
    },

  };
  ngOnInit(): void {
    this.customer_aname='',
    this.customer={
      customer_id: 0,
      customernameRr: '',
      customer_aname:'',
    
      customernameEn: '',
      customer_address: '',
      customer_country:'',
      customer_city: '',
    
      customer_state:'',
      customer_mobile: '',
      invoices_count:0
,      receipts_amount:0,
      customer_postcode:'',
      customer_taxid:0,
      user_id:0

    }
    this.productForm=this.fb.group({
      title: ['', Validators.required],
     
      body:['', Validators.required],
    
     
    });
    this.num = 0;
    this.btnTitle = 'اضافة';
    this.customers = [];
    this.message = '';
    // this.doctor = {
    //   doctorsId: 0,
    //   doctorName: '',
    //   doctorType: '',
    //   doctorEmail:'',
    //   doctorNationality: '',
    //   doctorTelephone: '',
    //   doctorPicure: '',
    //   doctorQualifa: ''
    // }

    //this.doctors = [];

    this.GetAllcustmer();
  }

  
  

  
  GetAllcustmer() {
    this.servicess.GetAllcustmers().subscribe((list:any) => {
      this.customers = list.data;
     
    }, (ex: any) => {
      console.log(ex);
   
    });
  }

  Addcustomer(){
    this.router.navigate(['Addcustomer']).then(x => {window.location.reload()});
  }
  ValidateModel() {
    this.customer.customer_address=this.productForm.value.title
    this.customer.customer_aname = this.productForm.value.title;
    this.customer.customer_city=this.productForm.value.title
    this.customer.customer_country = this.productForm.value.title;
    this.customer.customer_id=this.productForm.value.title
    this.customer.customer_mobile = this.productForm.value.title;
    this.customer.customer_state=this.productForm.value.title
    this.customer.customernameRr = this.productForm.value.title;
    this.customer.customernameEn=this.productForm.value.title
    this.customer.invoices_count = this.productForm.value.title;
    
  }
  



  Editcustomer(id: number) {
    if (id) {
      this.router.navigate(['Addcustomer',id]).then(x => {window.location.reload()});
 
    }

  }


  SelectAll() {
    var tbl = $('#tbl');
    var header = tbl.find('thead .ckheader');
    var item = tbl.find('tbody .ckitem');

    $(function () {
      item.on('change', function () {
        if ($(this).is(':checked')) {
          $(this).closest('tr').addClass('NewRowColor');
        }
        else {
          $(this).closest('tr').removeClass('NewRowColor');
        }
      });

      header.change(function () {
        
        var c = Boolean( this.checked) ;
        item.prop("checked", c);
        item.trigger('check');
        if ($(this).is(':checked')) {
          $(item).closest('tr').addClass('NewRowColor');
        }
        else {
          $(item).closest('tr').removeClass('NewRowColor');
        }
      });
    });
  }

  IsDelete() {
    var checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(":checked")) {
          return true;
        }
      }
    }
    return false;
  }

  DeleteCount() {
    var cont = $(".ckitem:checked").length;
    this.num = cont;
  }

  DeleteConfirm() {
    var checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      var ids = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(":checked")) {
          var id = String( $(checkboxes[i]).val());
          ids.push(id);
        }
      }

      this.servicess.DeletAllcustomer(ids).subscribe((s: any) => {
        console.log(s);
        this.GetAllcustmer();
        $("#btnClose").trigger("click");
      }, (ex: any) => console.log(ex));
    }
  }

  sertch(){
    if(this.customer_aname==''){
      this.ngOnInit() }
    else{
      this.customers=this.customers.filter(re=>{
          return re.customer_aname.toLocaleLowerCase().match(this.customer_aname.toLocaleLowerCase());
      })
    }

  }
}
