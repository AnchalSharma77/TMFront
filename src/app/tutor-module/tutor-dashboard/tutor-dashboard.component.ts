import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.css']
})
export class TutorDashboardComponent implements OnInit {

 
  totalDues:any;
  totalStudents:any;
  tutorDash!:FormGroup;
  idParam:any;
  params:any;
  basicData:any;
  constructor(private http: HttpClient,private route : ActivatedRoute,private httpService:HttpserviceService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
        console.log(this.idParam); 
      }
    );

    this.getDue();
    this.getDueList();
    this.getTotalStudents();
  }

  getDue(){
    return this.http.get("http://localhost:8092/api/totalDue",{params:{id:this.idParam}}).subscribe(data =>{
      this.totalDues=data;
     },
     (err: any) => {
      const jsonString = JSON.stringify(err);
      console.log(jsonString);
  
     })
   }

   getTotalStudents(){
    return this.http.get("http://localhost:8092/api/getTotalStudents",{params:{id:this.idParam}}).subscribe(data =>{
      this.totalStudents=data;
     },
     (err: any) => {
      const jsonString = JSON.stringify(err);
      console.log(jsonString);
  
     })
   }

   getDueList(){
    this.params="?id="+this.idParam;
    this.httpService.get("listDueStudents"+this.params,0,1).subscribe(
      (res:any)=>{
      if(res.responseCode==200){
        this.basicData=res.dueList;
      }
      
      },
      (err: any) => {
       const jsonString = JSON.stringify(err);
       console.log(jsonString);
   
      })
   }

}
