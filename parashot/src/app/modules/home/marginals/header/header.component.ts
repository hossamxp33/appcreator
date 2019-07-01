import { AuthenticationService } from './../../../../core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private loggedIn: boolean;
  cred: boolean = true;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe((res: User) => {
      console.log(res)
      if (res) {
        this.cred = false
      }
    })


  }

  signOut(): void {
  }
  logOut() {
    this.authService.logOut();
    this.cred = true;
  }
}
