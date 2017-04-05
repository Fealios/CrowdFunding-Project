import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  @Input() childCategory: string;

  projects = this.projectService.projects;


  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
  }

  categoryMatches(projectCategory: string) {
    if (projectCategory === this.childCategory) {
      return true;
    } else {
      return false;
    }
  }

}
