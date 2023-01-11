import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.css']
})
export class CharlistComponent {
id:any
ngOnInit(): void {
this.id="paid"
 
  this.renderchart();
}
renderchart() {
 
  var ctx = document.getElementsByClassName('check'); 
console.log(ctx)
  new Chart("check", {
  
    type: "pie",
    data: {
      labels: ['العملاء', 'المبيعات', 'الفواتير', 'سندات القبض', 'التقارير', 'المنتجات'],
      datasets: [{
   
        borderColor: "rgba(75,192,192,1)",

    
        label: '# of Votes',
        data: [ 45, 79, 20, 40, 47, 30],
        backgroundColor: [
          'red',
          'green',
          'Yellow'
          , 'Purple',
          'Orange',
          'Blue'
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
    
  }
  );

}
}
