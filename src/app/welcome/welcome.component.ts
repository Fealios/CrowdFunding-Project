import { Component } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
 projects : Project[]= [];
 selectedCategory: string = "all";

 showProject(clickedCategory){
   this.selectedCategory = clickedCategory;
   console.log(clickedCategory)
 }





}
