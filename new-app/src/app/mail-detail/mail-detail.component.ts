import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent implements OnInit {

  public maildetail = [];
  private maild = [];

  constructor(private mailService : MailServiceService) { }

  ngOnInit() {
    this.mailService.getMaildetail()
             .subscribe(data => this.maildetail = data['data']);
             console.log(this.maild = this.maildetail);
             
  }

}
