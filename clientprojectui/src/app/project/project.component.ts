import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';

import { UpdateService } from '../update.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public project : any;
  public formProject = new FormGroup({
    code: new FormControl(''),
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl('')
    
  });
  constructor(
    private clientService: ClientService,
    private updateService: UpdateService
  ) {
    this.clientService = clientService;
  }

  ngOnInit() {
    this.project = this.updateService.getProject();
    this.formProject.setValue(this.project);
  }

  updateProject(projectData:any) {
    this.clientService.updateProject(projectData).subscribe(res => {
      console.log(res);
    });
  }
}

