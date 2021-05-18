import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  idParam:any;
  notesList:any;
  constructor(private http: HttpserviceService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.idParam = params.id;
      console.log(this.idParam); 
    }
  );
  this.getNotesList();
  }

  getNotesList(){
    var url="getNotesByStuId?id="+this.idParam;
    this.http.get(url,0,1).subscribe(
      (res:any)=>{
        if (res.responseCode == 200) {
          console.log(res)
         this.notesList=res.notesList;
         
          }
        },
        err => {
          console.log(err);
        }
    );
  }
}