import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Output() clickedCategorySender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

    clickedCategory(selectedCategory: string){
      console.log(selectedCategory);
      this.clickedCategorySender.emit(selectedCategory);
    }


}
