import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrudesService implements CanActivate {

  constructor(private route: Router,) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem("token");
    if (token) {

      return true
    }
    else {

      this.route.navigate(['login']).then(x => { window.location.reload() });


      return false
    }
  }
}
