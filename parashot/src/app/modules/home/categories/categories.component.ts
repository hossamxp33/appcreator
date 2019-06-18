import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  imgSrc;

  constructor() { }

  ngOnInit() {
  }
  
  // show category image to user when choose an image
  
  showImage(event) {
  
    if (event.target.files && event.target.files[0]) {
    
        let reader = new FileReader();        
        reader.readAsDataURL(event.target.files[0]);
        
        reader.onload = (event) => {
        
            this.imgSrc = event.target.result;
        
        }
    
    }
  
  }
  
  // remove image that user uploaded
  
  resetImg() {
  
    this.imgSrc = null;
  
  }

}
