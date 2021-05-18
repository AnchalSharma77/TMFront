import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {

  setFeeGrp!:FormGroup;
  idParam:any;
  params:any;
  constructor(private http: HttpClient,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.setFeeGrp = new FormGroup ({
      
      std: new FormControl('',Validators.required),
      fee: new FormControl('',Validators.required),
  });
  // accessing route params
  this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
        console.log(this.idParam); 
      }
    );
  }


  setFee(){

    // const std = this.setFeeGrp.controls['std'].value;
    // const fee = this.setFeeGrp.controls['fee'].value;
    const jsonString = JSON.stringify(this.setFeeGrp.value);
    console.log(jsonString);
    console.log(this.idParam)

    this.http.post('http://localhost:8092/api/fee' ,JSON.parse(jsonString),{params:{id:this.idParam}}).subscribe(
    (data: any) => {
      console.log(data)
     const jsonString = JSON.stringify(data);
     console.log(jsonString);
     var res:any=data;
       
       if(res.resCode==200)
       {
       alert("Data Updated!!")
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
