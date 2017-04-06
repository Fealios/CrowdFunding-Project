import { Component, OnInit, Output } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  projects = this.projectService.projects;
  selectedProject = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name, description, fundGoal, category) {
    var newProject: Project = new Project(name, description, fundGoal, category);
    this.projectService.addProject(newProject);
  }

  editButtonClick(clickedProject){
  this.selectedProject = clickedProject ;
  console.log(this.selectedProject.name)
  }

}
