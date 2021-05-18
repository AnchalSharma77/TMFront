import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {
  removeStudent!:FormGroup;
  idParam:any;

  constructor(private http :HttpClient,private route:ActivatedRoute ,) { }

  ngOnInit(): void {
    this.removeStudent = new FormGroup ({
      id: new FormControl('',[Validators.required,
      Validators.email]),
    });

    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
        console.log(this.idParam); 
      }
    );
  }

  remove(){
    const id = this.removeStudent.controls['id'].value;
    var params="?tid="+this.idParam+"&id="+id;
    this.http.delete('http://localhost:8092/api/deleteStudent'+params)
    .subscribe({
        next: data => {
          var res:any=data;
          if(res.resCode==200)
          {
            alert("Record Deleted");
          }
          else if(res.resCode==800)
          {
           alert("Clear your dues first");
          }
          else if(res.resCode==404)
          {
           alert("Invalid Id");
          }
            
        },
        error: error => {
          //  this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });

  }

}
