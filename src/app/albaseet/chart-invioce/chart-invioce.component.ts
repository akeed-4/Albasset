import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'node_modules/chart.js';
import { MyservcesService } from 'src/app/myservces.service';
import { inivce } from '../models/invice';
Chart.register(...registerables)
@Component({
  selector: 'app-chart-invioce',
  templateUrl: './chart-invioce.component.html',
  styleUrls: ['./chart-invioce.component.css']
})
export class ChartInvioceComponent {
  labledata: any[]
  realdata: any[]
  count: number;
  count1: number
  storedata: any;
  invoice: any[];
  invoice1: inivce[];
  constructor(private router: Router,
    private servicess: MyservcesService,
    private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.count = 0;
    this.count1 = 0;
    this.labledata = []
    this.realdata = []
    this.storedata = '';
    this.invoice = [];
    this.servicess.GetAllInices().subscribe((list: any) => {
      this.storedata = list.data;
      this.invoice = list.data;

      for (let i = 0; i < this.invoice.length; i++) {

        if (this.invoice[i].invoice_type === "001") {
          this.count += 1
        }
        else if (this.invoice[i].invoice_type === "002")
          this.count1 += 1

      }
      this.renderchart(this.count, this.count1);

    }, (ex: any) => {
      console.log(ex);
    });
  }
  renderchart(id: number, id2: any) {

    const myChart = new Chart("paid", {
      type: "pie",
      data: {
        labels: ['الفواتير النقديه', '   الفواتير الاجله'],
        datasets: [{
          label: '# نسبه',
          data: [id, id2],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: [
            'red',
            'blue',
          ],
          borderWidth: 5,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
 
}
