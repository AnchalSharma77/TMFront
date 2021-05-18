import { animation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  
  classForm:FormGroup;
  idParam:any;
  msg:any;
  classList:any;
  show:boolean=false;
  constructor(private fb:FormBuilder, private route: ActivatedRoute , private http :HttpserviceService) { }

  ngOnInit(): void {
    this.classForm=this.fb.group({
      std:["", Validators.required],
      date:["", Validators.required],
      name:["", Validators.required],
      link:["", Validators.required],
      description:[""],
      msg:["", Validators.required],
     
    })
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
      }
    );
    this.getAllClasses()
  }

  schedule(){
    var tmpAry = {
      std : this.classForm.get('std').value,
      name : this.classForm.get('name').value,
      date : this.classForm.get('date').value,
      msg : this.classForm.get('msg').value, 
      link:this.classForm.get('link').value, 
   }
    var url = "/scheduleClass?id="+this.idParam;

    this.http.post(url,tmpAry,0,1).subscribe(
      (res:any)=>{
        if(res.responseCode==200){
          this.show=true;
          alert("Class Scheduled")
         // $('.toast').toast(true , true , 500)
        }
        if(res.responseCode==404){
          alert("Something went wrong")
        }
       },
       (err: any) => {
        const jsonString = JSON.stringify(err);
        console.log(jsonString);
    
       }
    )
  }


  updateServerStatus(e){
    var std = this.classForm.get('std').value;
    var date = this.classForm.get('date').value;
    var link = this.classForm.get('link').value;
    this.msg = " class on "+date+" has been scheduled . Join using  "+ link+" ";
  }

  updateMsgStatus(e){
     // var std = this.classForm.get('std').value;
      var date = this.classForm.get('date').value;
      var link = this.classForm.get('link').value;
      var desc = this.classForm.get('description').value;
     this.msg = " class on "+date+" has been scheduled . Join using  "+ link+" "+desc;
   

}

getAllClasses(){
  var url = "/scheduldeClasses?id="+this.idParam;
  this.http.get(url,0,1).subscribe(
    (res:any)=>{
      if(res.responseCode==200){
        this.classList=res.allClasses;   
       // $('.toast').toast(true , true , 500)
      }
      if(res.responseCode==404){
        alert("Something went wrong")
      }
     },
     (err: any) => {
      const jsonString = JSON.stringify(err);
      console.log(jsonString);
  
     }
  )
}
 
}
