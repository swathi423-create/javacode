import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  private clientService;
  public formProject = new FormGroup({
    code: new FormControl(''),
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl('')
  });
  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }
  ngOnInit() {}
  addProject(data:any): void {
    this.clientService.addProject(data).subscribe(res => {
      if (res != null) this.formProject.reset();
    });
  }
}
