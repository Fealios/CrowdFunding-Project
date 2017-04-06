import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({
        name: localUpdatedProject.name,
        description: localUpdatedProject.description,
        fundGoal: localUpdatedProject.fundGoal,
        category: localUpdatedProject.category
    });
  }

  deleteProject(projectToDelete) {
      var projectEntryInFirebase = this.getProjectById(projectToDelete.$key);
      projectEntryInFirebase.remove();
  }

}
