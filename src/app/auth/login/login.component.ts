import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/serveice/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any
  constructor(private routes: Router, public loginser: ServicesService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(){
    let data = this.loginForm.value.email
    this.loginser.onlogin(data).subscribe((res:any) => {
      console.log(res)
      if(res.body&&res.body.length>0){
        localStorage.setItem('usermail', res.body[0].mail)
        localStorage.setItem('username', res.body[0].fName+' '+res.body[0].lName)
        this.routes.navigate(['/auth/main'])
      }
    })

  }
}