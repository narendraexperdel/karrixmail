import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHandler   } from '@angular/common/http';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers:[HttpClient]
})
export class MailComponent implements OnInit {
  maildata: any={};
  mailtemplate: string;
  dataforService:any={};
  encodedTemplate: string;
  mainMail : string;

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  sendHttp(mails:any={}){
    return this.http.post('http://localhost:8080/api/backend/mailsent',mails);
  }
  sendMail(){
    console.log(this.maildata);
    this.sendHttp(this.maildata).subscribe(res=>{
      console.log("Response:"+res);
    });
    console.log("Mail Sent");
  }
}


