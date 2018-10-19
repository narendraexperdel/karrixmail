import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHandler   } from '@angular/common/http';

@Component({
  selector: 'app-authcode',
  templateUrl: './authcode.component.html',
  styleUrls: ['./authcode.component.css'],
  providers:[HttpClient]
})
export class AuthcodeComponent implements OnInit {
  authcodedata: any={};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  sendHttp(authcode:any={}){
    return this.http.post('http://localhost:8080/api/backend/sendauthcode',authcode);
  }
  sendAuthcode(){
    console.log(this.authcodedata);
    this.sendHttp(this.authcodedata).subscribe(res=>{
      console.log("Response:"+res);
    });
    console.log("Authcode Mail Sent");
  }

}
