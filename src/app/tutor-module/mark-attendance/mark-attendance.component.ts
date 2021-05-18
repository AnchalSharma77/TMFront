import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  studentName:String="";
  markAttendance!:FormGroup;
  att:any=[];
  test:any
  basicData={
    email:"",
    mobile:"",
    name:"",
    // attendance:""
  }
  idParam:any;
  header = new HttpHeaders({'content-type': 'application/json'});
  basicstuData:any;
  constructor(private http:HttpClient,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
        console.log(this.idParam); 
      }
    );
    this.getBasicData();   
  }
  
  sendData(){
     const jsonString = JSON.stringify(this.test);
    // console.log(jsonString);
    this.http.post('http://localhost:8092/api/markAttendance' ,jsonString,{headers:this.header,params:{id:this.idParam}}).subscribe(
    (data: any) => {
     const jsonString = JSON.stringify(data);
     console.log(jsonString);
     var res:any=data;
          if(res.resCode==200)
          {
            alert("Attendance Marked");
          }
          
          else if(res.resCode==404)
          {
           alert("Something went wrong");
          }
    },
    (err: any) => {
     const jsonString = JSON.stringify(err);
     console.log(jsonString);

    });

}
   check(e: any,i:number){
     console.log(e.target.value)
     this.att[i]=e.target.value;
    console.log(this.att);
    
     let tmary={
       'attendance':e.target.value
     }
  
     this.test[i]={'attendance':e.target.value,'email':this.test[i].email,'mobile':this.test[i].mobile,'name':this.test[i].name}
   // console.log(this.test)

    }


    getBasicData(){
      this.http.get("http://localhost:8092/api/getBasicStudData",{params:{id:this.idParam}}).subscribe(data =>{
        
       this.test=data
       },
       (err: any) => {
        const jsonString = JSON.stringify(err);
        console.log(jsonString);
    
       })
    }

}
