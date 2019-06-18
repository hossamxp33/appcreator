import { Designmodel } from './../models/design.model';
export class Design {
  header: any;
  footer: any;
  categorydesign: any;
  productsetting: any;
  bodydesign: any;
  main;
  constructor(design: Designmodel["data"]) {
    this.header = design.find(v => v.type === 'header');
    this.footer = design.find(v => v.type === 'footer');
    this.categorydesign = design.find(v => v.type === 'categorydesign');
    this.productsetting = design.find(v => v.type === 'productsetting');
    this.bodydesign = design.find(v => v.type === 'bodydesign');
    this.main = design.find(v => v.type === 'main')
    // console.log(this.header, this.footer, this.bodydesign)
  }
}
