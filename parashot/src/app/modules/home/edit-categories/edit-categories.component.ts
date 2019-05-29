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
  constructor() { }

  ngOnInit() {
  }

}
