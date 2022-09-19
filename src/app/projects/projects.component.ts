import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

import { UpdateService } from '../update.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects = [];
  constructor(
    private clientService: ClientService,
    private router: Router,
    private updateService: UpdateService
  ) {}

  ngOnInit() {
    this.clientService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }
  deleteProject(id : any): void {
    this.clientService.deleteProject(id).subscribe(data => console.log(data));
  }
  updateProject({ project} : any): void {
    this.updateService.setProject(project);
    this.router.navigate(['/project']);
  }
}
