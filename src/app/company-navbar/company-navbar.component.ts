import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrl: './company-navbar.component.css'
})
export class CompanyNavbarComponent {
  constructor(private router:Router,private authService:AuthService) {
  }

  goToAddJobs() {
    this.router.navigate(['/company/add/Jobs'])
  }

  goToAddCompany() {
    this.router.navigate(['/company/'+localStorage.getItem("idCompany")?.toString()])

  }

  logOut() {
    this.router.navigate(['/'])
    this.authService.logout()

  }
}
