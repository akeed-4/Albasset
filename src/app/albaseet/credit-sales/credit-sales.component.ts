import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservcesService } from 'src/app/myservces.service';
import { inivce } from '../models/invice';

@Component({
  selector: 'app-credit-sales',
  templateUrl: './credit-sales.component.html',
  styleUrls: ['./credit-sales.component.css']
})
export class CreditSalesComponent {

  constructor(
    private router: Router,
    private servicess: MyservcesService,
    private activeRoute: ActivatedRoute

  ) { }
price:any
   storedata:any;
  invoice: inivce[];
  invoice1: inivce[];
  approve: boolean;
  num: number;
  invioce: inivce;
  message: string;
  customer_aname: any;
  ngOnInit(): void {
    this. storedata='';
    this.approve = false;
    this.num = 0;
    this.customer_aname = '';
    this.invoice = [];
    this.invoice1 = []
    this.message = '';
this.price=0.0

    this.getinvioce();
  }
  getinvioce() {
    this.servicess.GetAllInices().subscribe((list: any) => {
      this.  storedata=list.data;
      this.invoice = this.storedata.filter((x:any)=>x.invoice_type==="002")
      for (var pr of  this.invoice) {
        this.price += pr.total_amount

      }
   
    }, (ex: any) => {
      console.log(ex);
    });
  }


  Addcustomer() {
    this.router.navigate(['Add-inivce']);
  }

  checkinvioce() {

    return true
  }

  Editcustomer(id: number) {
    if (id) {


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

        var c = Boolean(this.checked);
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
          var id = String($(checkboxes[i]).val());
          ids.push(id);
        }
      }

      this.servicess.DeletAllcustomer(ids).subscribe((s: any) => {
        console.log(s);
        this.getinvioce();
        $("#btnClose").trigger("click");
      }, (ex: any) => console.log(ex));
    }
  }
  sertch() {
    if (this.customer_aname == '') {
      this.ngOnInit()
    }
    else {

      this.invoice = this.invoice.filter(re => {
        return re.customer.customer_aname.toLocaleLowerCase().match(this.customer_aname.toLocaleLowerCase());
      })
    }

  }
 
}

