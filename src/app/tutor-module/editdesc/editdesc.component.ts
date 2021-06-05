import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-editdesc',
  templateUrl: './editdesc.component.html',
  styleUrls: ['./editdesc.component.css']
})
export class EditdescComponent implements OnInit {

  idParam:any;
  editDesc:FormGroup;
  data:any;
  desc:any;
  disable:boolean;

  constructor(private http:HttpserviceService,private route : ActivatedRoute ,private fb:FormBuilder ,private router:Router) { }
  ngOnInit(): void {
     
    this.editDesc=this.fb.group({
      description:["",
        // {value:this.desc,disabled: true},
       [Validators.required,
        Validators.minLength(100),
        Validators.maxLength(10000),
      ],
   
    ]
    })
    
  this.route.queryParams
  .subscribe(params => {
    console.log(params); 
    this.idParam = params.id;
    console.log(this.idParam); 
  }
);

  this.getDesc();
  this.disable=true;
  }

  enaleEdit(){
    this.disable=false;
    this.desc="";

  }

  getDesc(){
   var url="getAbt?id="+this.idParam;
   this.http.get(url,0,1)
   .subscribe(
    (res: any) => {
      if (res.resCode == 200) {
      this.desc=res.desc; 
      }
      else if(res.resCode==404){
        alert("Something went wrong");
      }
    },
    err => {
      console.log(err);
    }
  );

  }
  editdesc(){
    var tmpAry={
      desc:this.editDesc.get('description').value
    }
    var url="editAbout?id="+this.idParam;
    this.http.post(url,tmpAry,0,1)
    .subscribe(
      (res: any) => {
        if (res.resCode == 200) {
          alert("Update Successful")
          this.router.navigate(['/tutor/tutorPanel/dashboard'],{queryParamsHandling:"preserve"});
        }
        else if(res.resCode==404){
          alert("Something went wrong");
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
