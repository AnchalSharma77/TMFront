import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { MatchpassService } from 'src/app/services/matchpass.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';


@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent implements OnInit {

  registerTutor! : FormGroup;
 
  message: any;
  constructor(private http: HttpserviceService, private matchpass : MatchpassService , private fb: FormBuilder,private router :Router , private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.registerTutor =this.fb.group ({
      fn: ['',[Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
     // updateOn: 'blur'
    ]],
    ln:[""],
      email: ['',[Validators.required,
        Validators.email
      ]],
      mobile: ['',[Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      description:['',[Validators.required,
        Validators.minLength(100),
        Validators.maxLength(1000)
      ]],
      pass: ['',Validators.required],
      confpass: ['',Validators.required],
    },
    {validator: this.matchpass.MatchpassValidator('pass', 'confpass')}
  );
  } 

  register(){
    const jsonString = JSON.stringify(this.registerTutor.value);
    console.log(jsonString);
 

 this.http.post('/registertutor' ,JSON.parse(jsonString),0,1).subscribe(
   (   data: any) => {
  
      var res:any=data;
        
      if(res.resCode==200)
      {
      alert("Registration Successful!!")
      this.router.navigate(['/tm/tutorLogin']);
      }
      else if(res.resCode==800)
      {
        alert("Something went wrong");
      }
   },
   (   err: any) => {
   

     const jsonString = JSON.stringify(err);
     alert("error")
     console.log(jsonString);

   }
 );
 
  }

}
