import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable()
export class ApiService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  collapse = signal(true);

  onCollapse(){
    this.collapse.update(prev=>!prev);
  }

  // GET,POST,PUT,DELETE
  // url => base url, end point

  getPostService() {
    // mandatory options for using GET (url)
    return this.http.get(this.baseUrl + '/posts');
  }

  getCss(){
    const headerDict = {
      // 'Content-Type': 'text/html',
      // 'Accept': 'text/css,*/*',
      //  responseType: 'text'
      // 'Access-Control-Allow-Headers': 'Content-Type',
    }
    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new Headers(headerDict), 
    // };
        
    // let httpOptions = new HttpHeaders();
    // httpOptions.append('author','css/text');
    return this.http.get("src/styles.scss",{responseType:'text',headers:headerDict})
  }
}
