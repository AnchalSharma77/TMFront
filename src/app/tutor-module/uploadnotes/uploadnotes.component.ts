import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-uploadnotes',
  templateUrl: './uploadnotes.component.html',
  styleUrls: ['./uploadnotes.component.css']
})
export class UploadnotesComponent implements OnInit {

  idParam:any;
  addNotes:FormGroup;
  notesList:any;
  constructor(private fb: FormBuilder , private http:HttpserviceService ,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.addNotes=this.fb.group({
      std:["", Validators.required],
      fileName:[""]
    })
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
      }
    );

    this.getNotesList();
  }
  

  onNotesUpload(event) {
    const std = this.addNotes.controls['std'].value;
    const fileName = this.addNotes.controls['fileName'].value;
    const file = event.target.files[0]
    const formData = new FormData();
    console.log("fileee")
    console.log(file)
    formData.append('file',file);
    console.log(formData)
      // ------------------URL-------------------------------------
    var url =  "UploadNotes?id="+this.idParam+"&std="+std+"&fileName="+fileName;
    this.http.postFormData(url,formData,0,1)
    .subscribe(
        (res: any) => {
          if (res.responseCode == 200) {
          console.log(res)
         // this.notesList=res.notesList;
         
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  getNotesList(){
    var url="getNotesList?id="+this.idParam;
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
