import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) {}
    createAuthorizationHeader() {
      var headers = new HttpHeaders({
       // 'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
       // 'token':'abcd',
      // 'Authorization': 'Bearer 123456789'
      });
      return headers ;
   }

   get(subUrl,ignoreMainUrl = 0,useBaseUrl = 0) {
    var url = '';
    if(ignoreMainUrl){
      url = subUrl;
    }else if(useBaseUrl){
      url = environment.baseUrl + subUrl
    }
    // else{
    //   url = environment.apiUrl + subUrl;
    // }
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader();
    return this.http.get<any>(url, { headers: this.createAuthorizationHeader()  });
  }

  post(subUrl, data,ignoreMainUrl = 0,useBaseUrl = 0) {
    var url = '';
    if(ignoreMainUrl){
      url = subUrl;
    }else if(useBaseUrl){
      url = environment.baseUrl + subUrl
    }
    // else{
    //   url = environment.apiUrl + subUrl;
    // }
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader();
    return this.http.post<any>(url, data ,{ headers: this.createAuthorizationHeader()  });
  }

  postFormData(subUrl, data,ignoreMainUrl = 0,useBaseUrl = 0) {
    var url = '';
    if(ignoreMainUrl){
      url = subUrl;
    }else if(useBaseUrl){
      url = environment.baseUrl + subUrl
    }
    // else{
    //   url = environment.apiUrl + subUrl;
    // }
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader();
    return this.http.post<any>(url, data ,{ headers: this.createAuthorizationHeader()  });
  }

  getInstance(){
    return this.http;
  }


  
}
 

