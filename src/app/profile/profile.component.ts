import { Component } from '@angular/core';
import {Candidate} from '../model/models'

import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  candidateId ?: string | undefined;
  candidate?:Candidate
  isAut=false
  constructor(
    private apiService:ApiService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    if(localStorage.getItem("isAuthenticatedCandidate")){
      if(localStorage.getItem("isAuthenticatedCandidate")=="true"){
        this.isAut=true
      }
    }
    console.log(this.isAut)
    console.log(this.route.snapshot.paramMap.get('id'))
    this.candidateId = this.route.snapshot.paramMap.get('id')?.toString();
    this.apiService.getCandidate(this.candidateId).subscribe(value =>
    this.candidate=value)
  }

}
