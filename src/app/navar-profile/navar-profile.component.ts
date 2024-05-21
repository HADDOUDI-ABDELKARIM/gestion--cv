import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navar-profile',
  templateUrl: './navar-profile.component.html',
  styleUrl: './navar-profile.component.css'
})
export class NavarProfileComponent {
  isAut: boolean=false;
  constructor(
    private router:Router,
    private auth:AuthService
  ) {

  }

  goToProfile() {
    console.log('hello')
    this.router.navigate(['profile/'+localStorage.getItem("idCandidate")])
  }


  goToApplication() {
    this.router.navigate(['jobs'])

  }

  goToListApplication() {
    this.router.navigate(['candidate/postulation'])

  }

  logOut() {
    this.auth.logout()

  }
}
