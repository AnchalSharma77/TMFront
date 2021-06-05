import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { AuthgaurdserviceService } from '../services/authgaurdservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authgaurdservic: AuthgaurdserviceService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(!this.authgaurdservic.getTutorToken()){
        this.router.navigate(['/tm/tutorLogin']);
      }
    return true;
  }
  
}
