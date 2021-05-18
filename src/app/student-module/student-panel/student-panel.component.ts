import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {

  userName:any;
  imgUrl:string="assets/Img/DefaultUserImage.png";
  idParam:any;
  constructor(private route : ActivatedRoute,private router:Router ,private http:HttpserviceService) { }

  ngOnInit(): void {

    this.userName=localStorage.getItem("stu id");
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.idParam = params.id;
      console.log(this.idParam); 
    }
  );
  this.getProfileImage()
  }
  signout(){
    this.userName=window.localStorage.removeItem("stu id");
     this.router.navigate(['/tm/stuLogin']);
  }
  
  
  onFileChanged(event) {
    const file = event.target.files[0]
    const formData = new FormData();
    console.log("fileee")
    console.log(file)
    
      formData.append('profileImg',file);
      console.log(formData)
      var url =  "updateStuProfileImg";
      this.http.postFormData(url+"?id="+this.idParam,formData,0,1)
      .subscribe(
        (res: any) => {
          if (res.responseCode == 200) {
          console.log(res)
          this.imgUrl="/assets/"+res.imgUrl;
          }

          if(res.responseCode==404){
            alert("Get Yourself registered with a tutor First");
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  
  getProfileImage(){
    var url="getStuProfileImg"
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
