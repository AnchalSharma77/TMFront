import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  stuLoginForm!:FormGroup;

  constructor(private http:HttpClient, private router: Router,private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.stuLoginForm = new FormGroup ({
      id: new FormControl('',Validators.required),
      otp: new FormControl()
  }); 
}

  getOtp(){
    const id = this.stuLoginForm.controls['id'].value;
    console.log(id);
   this.http.post("http://localhost:8092/api/getStudentLoginOtp","",{params:{id:id}}
      ).subscribe(response =>{
       
       var res:any=response;
       console.log(res)
       if(res.resCode==200)
       {
         localStorage.setItem("stu id",id)
       }
       else if(res.resCode==404)
       {
        alert("Invalid Credentials or user ids not registered");
       }
       },
       (err: any) => {
        const jsonString = JSON.stringify(err);
        console.log(jsonString);
    
       })
  }

  login(){
    const id = this.stuLoginForm.controls['id'].value;
    const otp = this.stuLoginForm.controls['otp'].value;
    const jsonString = JSON.stringify(this.stuLoginForm.value);
    console.log(jsonString);
 

 this.http.post('http://localhost:8092/api/studentLogin' ,JSON.parse(jsonString)).subscribe(
   response => {
     const jsonString = JSON.stringify(response);
     var res:any=response;
    console.log(res)
    if(res.resCode==200)
    {
      localStorage.setItem("stu id",id)
      this.router.navigate(['/student/studentPanel'] ,{queryParams:{id:btoa(id)}});
    }
    else if(res.resCode==404)
    {
     alert("Invalid Credentials or user ids not registered");
    }
    else if(res.resCode==800)
    {
     alert("Someting went wrong");
    }
   },
   err => {
     console.log(err);
    // alert("Invalid id or password");
   },
 );
    
  }

}

