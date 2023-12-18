import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/serveice/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regfileForm: any
  constructor(private routes: Router, private regser: ServicesService) {}

  ngOnInit(): void {
    this.regfileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(){
    let data = {
      fName : this.regfileForm.value.firstName,
      lName: this.regfileForm.value.lastName,
      mail: this.regfileForm.value.email,
      pword: this.regfileForm.value.password
    }
    this.regser.onRegiseter(data).subscribe((res:any) => {
      console.log(res)
      this.routes.navigate(['/auth/login'])
    })
    
  }
}
