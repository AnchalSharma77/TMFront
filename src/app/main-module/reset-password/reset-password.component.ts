import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { MatchpassService } from 'src/app/services/matchpass.service';

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
  constructor(private http:HttpserviceService ,private matchpass : MatchpassService , private fb: FormBuilder,private loader:LoaderserviceService,private router:Router) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.resetPass = this.fb.group ({
      email: ['',[Validators.required,Validators.email]],
      pass: ['',Validators.required],
      confpass: ['',Validators.required],
  },
  {validator: this.matchpass.MatchpassValidator('pass', 'confpass')}
  ); 
  // this.resetPass.patchValue({
  //   pass:"111"
  // });
  }

  // matchPass(e){
  //   this.confirmPass = e.target.value;
  //   this.pass=this.resetPass.controls['pass'].value;
  //   if(this.confirmPass==this.pass){
  //     this.bcolor="green";
  //   }
  //   else{
  //     this.bcolor="red";
  //   }
  // }

  reset(){
    
    this.pass=this.resetPass.controls['pass'].value;
    this.confirmPass=this.resetPass.controls['confpass'].value;
    if(this.confirmPass==this.pass){
      console.log(this.confirmPass==this.pass)
      var tmpAry = {
        email :this.resetPass.get('email').value,
        pass : btoa(this.pass),  
     }
     
    this.http.post('resetPass' ,tmpAry,0,1).subscribe(
      response => {
        var res:any=response;
       console.log(res)
       if(res.resCode==200)
       {
       alert("Success!!")
       this.router.navigate(['/tm/tutorLogin']);
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
