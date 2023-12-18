import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/serveice/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  name : any
  email: any
  constructor(private proser: ServicesService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('username')
    this.email = localStorage.getItem('usermail')
  }
}
