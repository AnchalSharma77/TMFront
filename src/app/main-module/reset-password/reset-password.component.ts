import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  pass:any;
  confirmPass:any;
  bcolor="";
  resetPass : FormGroup;
  constructor(private http:HttpserviceService ,private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.resetPass = new FormGroup ({
      email: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',Validators.required),
      confpass: new FormControl('',Validators.required),
  }); 
  }

  matchPass(e){
    this.confirmPass = e.target.value;
    this.pass=this.resetPass.controls['pass'].value;
    if(this.confirmPass==this.pass){
      this.bcolor="green";
    }
    else{
      this.bcolor="red";
    }
  }

  reset(){
    this.pass=this.resetPass.controls['pass'].value;
    this.confirmPass=this.resetPass.controls['confpass'].value;
    if(this.confirmPass==this.pass){
      var tmpAry = {
        email :this.resetPass.get('email').value,
        pass : btoa(this.resetPass.get('pass').value),  
     }
    this.http.post('http://localhost:8092/api/resetPass' ,tmpAry,0,1).subscribe(
      response => {
        //const jsonString = JSON.stringify(response);
        var res:any=response;
       console.log(res)
       if(res.resCode==200)
       {
       alert("Success!!")
       }
       else if(res.resCode==404)
       {
         alert("Invalid Id");
       }
      },
      err => {
        console.log(err);
       // alert("Invalid id or password");
       console.log(err);
      },
    );
    }
    else{
      alert("password doesn't match")
    }
  }
}
