import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler   } from '@angular/common/http';
import { IMailDetail } from './mail-detail';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {


   private _url : string = "http://localhost:8080/api/backend/mails";

  constructor(private http: HttpClient) { }

  getMaildetail(): Observable<IMailDetail[]>{
    return this.http.get<IMailDetail[]>(this._url);

  }
}
