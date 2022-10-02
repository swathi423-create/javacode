
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any;
  constructor(
    private clientService: ClientService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.profile = this.loginService.getProfile();
    console.log(this.profile);
  }
}
