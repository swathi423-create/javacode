import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private project:any;
  constructor() {}
  public setProject(project:any) {
    this.project = project;
  }
  public getProject() {
    return this.project;
  }
}
