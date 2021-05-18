import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderserviceService } from '../Loadermaterial/loaderservice.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private loader:LoaderserviceService) { }

  ngOnInit(): void {
    this.loader.isLoading=new BehaviorSubject<boolean>(false);
  }

}
