import { DesignService } from 'src/app/services/design.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() source: string;
  @Input() productsId: number;

  products: Array<{ id: number, photo: string, name: string, category: string }>

  constructor(private design: DesignService) { }

  ngOnInit() {
    // console.log(this.productsId)
    this.products = [{
      id: 1, photo: "../../../../assets/images/shirt.jpg", name: 'Saif Pharmacy', category: 'صيدليات'
    },
    {
      id: 2, photo: "../../../../assets/images/shirt-2.jpg", name: 'Wokhouse', category: 'مطاعم'
    }, {
      id: 3, photo: "../../../../assets/images/shirt-3.jpg", name: 'Wokhouse', category: 'متاجر'
    }, {
      id: 4, photo: "../../../../assets/images/shirtt-1.jpg", name: 'Wokhouse', category: 'صيدليات'
    },]
  }
  setId(id) {
    this.design.productsId.next(id)
    // console.log(id)


  }
}
