import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-tutorlist',
  templateUrl: './tutorlist.component.html',
  styleUrls: ['./tutorlist.component.css']
})
export class TutorlistComponent implements OnInit {

  tutorList:any;
  imgUrl:any;
  constructor(private http:HttpserviceService ,private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);;
    this.getList()
  }

  getList(){
    var url="getAllTutors"
    this.http.get(url,0,1).subscribe(
      (res:any)=>{
        if (res.responseCode == 200) {
          console.log(res)
         this.tutorList=res.tutorList;
        //  if(this.tutorList.imgUrl==""){
          
        //    this.imgUrl="assets/Img/Tutors.png";
        //  }
        //  else{
        //  this.imgUrl="/assets/"+this.tutorList.imgUrl;
         
        //  }
          }
        },
        err => {
          console.log(err);
        }
    );
  
  }

}
