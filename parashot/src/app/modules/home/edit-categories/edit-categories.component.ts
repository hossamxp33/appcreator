import { Design } from './../../../helpers/design';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DesignService } from 'src/app/services/design.service';
@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {
  color = '#d02e2e';
  checked = false;
  disabled = false;
  shadow;
  title;
  border;
  show: boolean = false;
  mainDesign;
  categoryDesign
  constructor(private design: DesignService) { }

  ngOnInit() {
    $("#fontSize").on("input", function () {
      // Print entered value in a div box
      console.log($(this).val());
      $('.sim .row span').css('font-size', $(this).val() + 'px')
    });
    $("#catTitleInput").on("input", function () {
      // Print entered value in a div box
      console.log($(this).val());
      $('.sim> span').text($(this).val());
      this.title = true;
      $('.sim> span').show();
    });
    $('#catTitleSize').on('input', function () {
      $('.sim> span').css('font-size', $(this).val() + 'px')
    })
    $(document).mouseup(function (e) {
      // console.log($.type(e.target.id));
      if (!$("#sketch-1 ,#sketch-2, #sketch-3").is(e.target) && $("#sketch-1 ,#sketch-2, #sketch-3").has(e.target).length === 0) {
        console.log(e.target.id)
        $("#sketch-1 ,#sketch-2, #sketch-3").hide();
        this.show = false;

      }
    });
    this.design.getInitialDesign().subscribe(res => {
      this.mainDesign = new Design(res.data);
      this.categoryDesign = this.mainDesign.categorydesign;
      console.log(this.categoryDesign)
      this.border = this.categoryDesign.data.border;
      this.shadow = this.categoryDesign.data.shadow;
      console.log(this.shadow)
      if (this.categoryDesign.data.title == '') {
        this.title = false
        $('.sim> span').hide();
      } else {
        this.title = true;
        $('.sim> span').show();
        $('.sim> span').text(this.categoryDesign.data.title)
      }
    })
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
  changeComplete(event, i) {
    console.log(i)
    if (i === 1) {
      $(".appCat").css("background", event.color.hex);
      $('#1').css('background', event.color.hex);
      this.design.editDesign({ type_id: 3, fieldname: 'background', value: event.color.hex }).subscribe(res => {
        console.log(res)
      })
    }
    if (i === 2) {
      $('#2').css('background', event.color.hex);
      $(".first span ,.thumbnail-image h6, .category-1 h6 , .category h6").css("color", event.color.hex);
      this.design.editDesign({ type_id: 3, fieldname: 'fontcolor', value: event.color.hex }).subscribe(res => {
        console.log(res)
      })
    }
    if (i === 3) {
      $('#3').css('background', event.color.hex);
      $('.sim').css('border-color', event.color.hex);
      this.design.editDesign({ type_id: 3, fieldname: 'fontcolor', value: event.color.hex }).subscribe(res => {
        console.log(res)
      })
    }
  }
  openColorSketch(i) {
    var container = $("#sketch-" + i);
    container.show();

  }
}
