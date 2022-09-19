import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public appName = 'ClientProject';
    clientForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {}

  addClient(data:any) {
    this.clientService.addClient(data).subscribe(res => {
      if (res != null) this.router.navigate(['/index']);
    });
  }
}
