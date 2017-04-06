import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { User } from '../user.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.projectId = urlParametersArray['id'];
   });
   this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver =>{
       this.projectToDisplay = dataLastEmittedFromObserver;
   });
   // this.albumService.getAlbumById(this.albumId).subscribe(dataLastEmittedFromObserver => {
   //   this.albumToDisplay = dataLastEmittedFromObserver;
  }

  addDonation(name, donation) {
      var newUser: User = new User(name, donation);
      console.log(newUser.name);
      console.log(newUser.donation);
      console.log(this.projectToDisplay);
      console.log(this.projectToDisplay.donators);
      this.projectService.donate(newUser, this.projectToDisplay);
  }

}
