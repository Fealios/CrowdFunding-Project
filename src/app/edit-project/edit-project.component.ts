import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})



export class EditProjectComponent implements OnInit {
  @Input() childSelectedProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  doneEditing(){

  }

  beginUpdatingProject(projectToUpdate){
      this.projectService.updateProject(projectToUpdate);
  }

  delete(projectToDelete) {
      this.projectService.deleteProject(projectToDelete);
  }
}
