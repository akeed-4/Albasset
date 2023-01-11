import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from '../autho.service';
import { MyservcesService } from '../myservces.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  message!: string;
  constructor(private service: AuthoService,
    private route: Router,
    private auth: AuthoService
  ) { }
  isdoct!: boolean;
  isHospital!: boolean
  isAdinn!: boolean;
  isUser!: boolean;
  email!: string;
  title = 'alwaseet-Net';
  ngOnInit() {
    this.isAdinn = false
    this.isdoct = false
    this.isHospital = false
    this.isUser = false;

  

  }

  loginuser() {
    const token = localStorage.getItem('token');

    if (token == null) {

      return true;
    }
    return false;
  }
  isUserRegistered() {
    const token = localStorage.getItem('token');

    if (token != null) {

      return true;
    }
    return false;
  }


  Logout() {
   


    this.service.LogoutUsers().subscribe(
      succ => {
        localStorage.clear();
        console.log('authrozion return false');
        this.route.navigate(['login']).then(x => { window.location.reload() });

      },
      err => console.log(err)
    );

  }

}
      // تتحقق هل المفاتيح موجوده والا مش موجوده







