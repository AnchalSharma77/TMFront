import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-tutorlogin',
  templateUrl: './tutorlogin.component.html',
  styleUrls: ['./tutorlogin.component.css']
})
export class TutorloginComponent implements OnInit {

  myform: FormGroup;
  message: String= "";

    

  constructor(private http: HttpserviceService , private router: Router,private loader:LoaderserviceService) {
    
   }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.myform = new FormGroup ({
      id: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',Validators.required)
  });
  }

  onSubmit(){
    const id = this.myform.controls['id'].value;
     var tmpAry = {
       id : this.myform.get('id').value,
       pass : btoa(this.myform.get('pass').value)
   }
  
   var url="login";

  this.http.post(url ,tmpAry,0,1).subscribe(
    response => {
      var res:any=response;
     console.log(res)
     if(res.resCode==200)
     {
       var desc =res.desc;
       localStorage.setItem("user id",id)
      //  localStorage.setItem("Tdesc",desc)
       this.router.navigate(['/tutor/tutorPanel'] ,{queryParams:{id:btoa(id)}});
     }
     else if(res.resCode==404)
     {
      alert("Invalid Credentials or user ids not registered");
     }
    },
    err => {
      console.log(err);
    },
  );
  }

}
