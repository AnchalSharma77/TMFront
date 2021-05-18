import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup,FormControl,Validators,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  registerStudent : FormGroup;
  idParam:any;
  message: any;
  params:any;

  constructor(private http: HttpClient ,private route:ActivatedRoute , private httpService:HttpserviceService) { }

  ngOnInit(): void {
    this.registerStudent = new FormGroup ({
      mobile: new FormControl('',[Validators.required,
        Validators.minLength(10)
      ]),
      email: new FormControl('',[Validators.required,
        Validators.email
      ]),
      name: new FormControl('',Validators.required),
      std: new FormControl('',[Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2)
      ]),
  });

  this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
        console.log(this.idParam); 
      }
    );
  }

  

  registerStu(){
    var tmpAry = {
       mobile : this.registerStudent.get('mobile').value,
       email : this.registerStudent.get('email').value,
       name : this.registerStudent.get('name').value,
       std : this.registerStudent.get('std').value,
    }
    this.params="?id="+this.idParam;
    this.httpService.post("registerStudent"+this.params, tmpAry,0,1)
        .subscribe(
          (data: any) => {
               const jsonString = JSON.stringify(data);
               console.log(jsonString);
               var res:any=data;
                 
                 if(res.resCode==200)
                 {
                 alert("Registration Successful!!")
                 }
                 else if(res.resCode==800)
                 {
                   alert("Something went wrong");
                 }
              },
              (err: any) => {
               const jsonString = JSON.stringify(err);
               console.log(jsonString);
          
              });
  }
}
