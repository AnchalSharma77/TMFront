import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthgaurdserviceService } from '../services/authgaurdservice.service';

@Injectable({
  providedIn: 'root'
})
export class StuAuthguardGuard implements CanActivate {
  constructor(private authgaurdservic: AuthgaurdserviceService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot):  boolean  {
      if(!this.authgaurdservic.getStudentToken()){
        this.router.navigate(['/tm/stuLogin']);
      }
    return true;
  }
  
}
