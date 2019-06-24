import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {
  color = '#d02e2e';
  checked = false;
  disabled = false;
  shadow = true;
  title = true;
  border = true;
  show: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleShadow() {

    this.shadow = !this.shadow;
  }
  toggleTitle() {

    this.title = !this.title;
  }
  toggleBorder() {
    this.border = !this.border;
  }
  changeComplete(event) {

  }

}
