import { Component } from '@angular/core';
import { LoaderserviceService } from './Loadermaterial/loaderservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  constructor(public loader:LoaderserviceService){}
}
