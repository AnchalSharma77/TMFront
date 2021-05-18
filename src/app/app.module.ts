import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceService } from './services/httpservice.service';
import { LoaderComponent } from './Loadermaterial/loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoaderComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpserviceService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }  
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
