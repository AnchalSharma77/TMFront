import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classList:any;
  idParam:any;

  constructor( private route: ActivatedRoute , private http :HttpserviceService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
      }
    );
    this.getAllClasses()
  }

  getAllClasses(){
    var url = "/classByStudent?id="+this.idParam;
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
