import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword:FormGroup;

  constructor(private http:HttpserviceService,private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.forgotPassword = new FormGroup ({
      email: new FormControl('',Validators.required),
  }); 
  }

  sendLink(){
    const email = this.forgotPassword.controls['email'].value;
    var url="/resetPassLink?id=" +email;
    this.http.post(url,"",0,1).subscribe(
    response => {
      var res:any=response;
      console.log(res)
      if(res.resCode==200)
      {
      console.log("link sent");
      }
      else if(res.resCode==404)
      {
        alert("Someting went wrong");
      }
    },
    err => {
      console.log(err);
    },
  );
      
  }
  
}
