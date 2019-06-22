import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  signInWithGoogle(): void {
  }

  signInWithFB(): void {
  }
}
