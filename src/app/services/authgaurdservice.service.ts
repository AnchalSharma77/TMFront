import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdserviceService {

  constructor() { }

  getTutorToken(){
    return localStorage.getItem("user id")
  }

  getStudentToken(){
    return localStorage.getItem("stu id")
  }
}
