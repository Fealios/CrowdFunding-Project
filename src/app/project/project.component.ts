import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';
// import { ProjectDetailComponent } from './project-detail/project-detail.component';
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
    if (projectCategory === this.childCategory || this.childCategory === "all") {
      return true;
    } else {
      return false;
    }
  }

  goToDetailPage(clickedProject){
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
