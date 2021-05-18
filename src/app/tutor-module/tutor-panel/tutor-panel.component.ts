import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-tutor-panel',
  templateUrl: './tutor-panel.component.html',
  styleUrls: ['./tutor-panel.component.css']
})
export class TutorPanelComponent implements OnInit {
  imgUrl:String="assets/Img/DefaultUserImage.png"
  userName:any;
  idParam:any;
  
  constructor(private router:Router , private http : HttpserviceService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName=window.localStorage.getItem("user id");


    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idParam = params.id;
        console.log(this.idParam); 
      }
    );

    this.getProfileImage();
  }
    
  

  signout(){
    this.userName=window.localStorage.removeItem("user id");
     this.router.navigate(['/tm/tutorLogin']);
  }

  goFee(){
    this.router.navigate(['tutor/tutorPanel/pay'],{queryParamsHandling:"preserve"});
  }


  onFileChanged(event) {
    const file = event.target.files[0]
    const formData = new FormData();
    console.log("fileee")
    console.log(file)
    
      formData.append('profileImg',file);
      console.log(formData)
      var url =  "updateProfileImg";
      this.http.postFormData(url+"?id="+this.idParam,formData,0,1)
      .subscribe(
        (res: any) => {
          if (res.responseCode == 200) {
          console.log(res)
          this.imgUrl="/assets/"+res.imgUrl;
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  
  getProfileImage(){
    var url="getProfileImg"
    this.http.get(url+"?id="+this.idParam,0,1).subscribe(
      res =>{
        if(res.imgUrl==null){
          this.imgUrl="assets/Img/DefaultUserImage.png";
        }
        else{
          this.imgUrl="/assets/"+res.imgUrl;
        }
        
       },
       (err: any) => {
        const jsonString = JSON.stringify(err);
        console.log(jsonString);
    
       }

    )
  }
  

}
