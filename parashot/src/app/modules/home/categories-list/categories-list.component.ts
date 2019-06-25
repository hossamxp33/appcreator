import { Component, OnInit, Input } from '@angular/core';
import { MainpageService } from 'src/app/services/mainpage.service';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() source: any;
  categories;
  id;
  constructor(private mainpageService: MainpageService, private design: DesignService) { }

  ngOnInit() {
    console.log(this.source)
    this.mainpageService.getMainPage().subscribe(res => {
      this.categories = res.category;
      // console.log(this.categories)
    })
    this.design.categoryId.subscribe(res => {
      this.id = res;
    })
  }
  setId(id) {
    this.design.categoryId.next(id);
  }

}
