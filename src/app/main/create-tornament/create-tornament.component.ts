import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/serveice/services.service';

@Component({
  selector: 'app-create-tornament',
  templateUrl: './create-tornament.component.html',
  styleUrls: ['./create-tornament.component.scss']
})
export class CreateTornamentComponent implements OnInit {
  selected: any  
  creatForm: any
  constructor(private routrs: Router, public createTor: ServicesService) {}

  ngOnInit(): void {
    this.selected = ''
    this.creatForm = new FormGroup({
      date: new FormControl(''),
      name: new FormControl(''),
      opt: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.creatForm.value)
    this.routrs.navigate(['/auth/main'])
    let data = {
      date : this.creatForm.value.date,
      name: this.creatForm.value.name,
      bracketType: this.creatForm.value.opt,
    }
    this.createTor.onCeate(data).subscribe((res:any) => {
      console.log(res)
      // this.routrs.navigate(['/auth/main'])
    })
  }
}
