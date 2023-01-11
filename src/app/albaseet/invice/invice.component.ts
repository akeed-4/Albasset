import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { color } from 'highcharts';
import { MyservcesService } from 'src/app/myservces.service';
import Swal from 'sweetalert2';
import { approveinvice } from '../models/approveinvice';

import { customer } from '../models/customers';
import { inivce } from '../models/invice';
import { inviceType } from '../models/inviceType';
import { InvoiceProductModel } from '../models/InvoiceProductModel';
import { nameModel } from '../models/namemodel';
import { products } from '../models/products';




@Component({
  selector: 'app-invice',
  templateUrl: './invice.component.html',
  styleUrls: ['./invice.component.css']
})
export class InviceComponent implements OnInit {

  constructor(
    private router: Router,
    private servicess: MyservcesService,
    private activeRoute: ActivatedRoute

  ) { }
  price: any
  storedata: any;
  invoice: inivce[];
  products: products[]
  approve: boolean;
  num: number;
  invioce: inivce;
  aprove: approveinvice;
  message: string;
  customer_aname: any;
  ngOnInit(): void {
    this.price = 0

    this.storedata = '';

    this.aprove = {
      id: 0
    }


    this.approve = false;
    this.num = 0;
    this.customer_aname = '';
    this.invoice = [];
    this.message = '';


    this.getInvice();

  }
  getInvice() {
    this.servicess.GetAllInices().subscribe((list: any) => {

      this.storedata = list.data;
      this.invoice = this.storedata.filter((x:any)=>x. invoice_acceptance===1)

      for (var pr of  this.invoice) {
        this.price += pr.total_amount

      }

      //  this.storedata.filter((x:any)=>x. invoice_acceptance===1)

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

  aproveInvioce(id: number) {

    if (id != null) {
      this.aprove.id = id;

      this.servicess.approveInvioce(this.aprove).subscribe(success => {
        Swal.fire('خطاء!', '  تم اعتماد البيانات  بنجاح', 'info')
        this.ngOnInit()

      }, (ex: any) => {

        console.log(ex.error);
      })

    }
    else { alert("skm") }

  }

  EditInvioce1(id: number) {

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
        this.getInvice();
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
