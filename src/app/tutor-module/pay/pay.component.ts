import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import {  HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

 
  payFee!:FormGroup;
  response:any;
  dueResponse:any;
  idParam:any;
  params:any;
  httpParams: HttpParams = new HttpParams;
  constructor(private http:HttpserviceService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.payFee = new FormGroup ({
    id: new FormControl('',[Validators.required,
    Validators.pattern("^[a-zA-Z0-9_+&*-]+(?:\\."+ 
    "[a-zA-Z0-9_+&*-]+)*@" + 
    "(?:[a-zA-Z0-9-]+\\.)+[a-z" + 
    "A-Z]{2,7}$")]),
    payFor: new FormControl('',[Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2)
    ]),
    monthsDue: new FormControl('',Validators.required)
  });

  this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
      //  console.log(this.idParam); 
      }
    );
  }

  

  sendId(){
    const id = this.payFee.controls['id'].value;
    const jsonString = JSON.stringify(this.payFee.value);
    console.log(jsonString);
    this.params="?id="+this.idParam
    this.http.post('due'+this.params ,JSON.parse(jsonString),0,1).subscribe(
    (data: any) => {
     const jsonString = JSON.stringify(data);
     console.log(jsonString);
     this.getDue();
    },
    (err: any) => {
     const jsonString = JSON.stringify(err);
     console.log(jsonString);

    });
    
 }

  getDue(){
    const id = this.payFee.controls['id'].value;
    this.params="?sid="+id+"&eid="+this.idParam;
    var url = environment.baseUrl + "dueById/" + this.params;
    return this.http.get(url, 1)
  }

 showDue(){
   this.getDue().subscribe(
     (res:any)=>{
    // console.log(res);
    if(res.responseCode==200){
    this.dueResponse=res.dm;
    }
    if(res.responseCode==404){
      alert("Student is not registered")
    }
    if(res.responseCode==500){
      // TODO: navigate to internal server error
    }
    
   },
   (err: any) => {
    const jsonString = JSON.stringify(err);
    console.log(jsonString);

   })
 }

 makePayment(){
    var tmpArr={
      id:this.payFee.get('id').value,
      payFor:this.payFee.get('payFor').value
    }
    
    console.log(tmpArr);
    this.params="?eid="+this.idParam
    this.http.post('pay'+this.params ,tmpArr,0,1).subscribe(
    (data: any) => {
     const jsonString = JSON.stringify(data);
     console.log(jsonString);
     var res:any=data;
       
     if(res.resCode==200)
     {
     alert("Data Updated!!")
     }
     else if(res.resCode==800)
     {
       alert("Invalid Value");
     }
    },
    (err: any) => {
     const jsonString = JSON.stringify(err);
     console.log(jsonString);

    });
    
  
 }


}
