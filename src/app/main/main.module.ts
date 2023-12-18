import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateTornamentComponent } from './create-tornament/create-tornament.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { DilogComponent } from './dilog/dilog.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateTornamentComponent,
    ProfileComponent,
    DilogComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
