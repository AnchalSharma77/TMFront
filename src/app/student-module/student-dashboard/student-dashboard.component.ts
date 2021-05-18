import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  totalDue:any;
  id:any;
  params:any;
  tutorList:any;
  stuPanel:any;
  totalTutors:any;
  constructor(private http:HttpClient ,private route : ActivatedRoute,private httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.id = params.id;
      
    }
  );
    this.id=localStorage.getItem("stu id");
    this.getStuPanel()
  }

  getDueFee(){
    return this.http.get("http://localhost:8092/api/getStudentTotalDue",{params:{sid:this.id},
    responseType:"json"}).subscribe(data =>{
      this.totalDue=data;
     
     },
     (err: any) => {
      const jsonString = JSON.stringify(err);
      console.log(jsonString);
  
     })
    
  }

  getStuPanel(){
    var url ="/studentPanel?id="+btoa(this.id)
    this.httpService.get(url,0,1).subscribe(res =>{
      var data=res.stuPanel;
      this.totalDue=data[0];
      this.totalTutors=data[1];
      this.tutorList=data[2];
      console.log(data);
     },
     (err: any) => {
      const jsonString = JSON.stringify(err);
      console.log(jsonString);
  
     })
  }
}
