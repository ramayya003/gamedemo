import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../dilog/dilog.component';
import { ServicesService } from 'src/app/shared/serveice/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // listdatas = [
  //   {
  //     name: 'Hello',
  //     date: '20-10-2020'
  //   },
  //   {
  //     name: 'naruto',
  //     date: '20-10-2020'
  //   }
  // ]
  listdatas: any;
  constructor(public dialog: MatDialog, public getData: ServicesService) {}
  ngOnInit(): void {
    this.getData.onAllUser().subscribe((res:any) => {
      this.listdatas = res.body
    })
  }
  openDialog(): void {
    this.dialog.open(DilogComponent, {
      width: '250px',
      height: 'auto'
    });
  }
}
