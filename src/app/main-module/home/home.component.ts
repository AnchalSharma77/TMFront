import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from 'src/app/Loadermaterial/loaderservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);
  }
  
}
