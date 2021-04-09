import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from './Shared/sidenav/sidenav.component'
import {NavComponent} from './Shared/nav/nav.component'
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent,NavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    NavComponent
  ]
})
export class MainModule { }
