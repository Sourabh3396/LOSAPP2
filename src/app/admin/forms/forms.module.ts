import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormsRoutingModule} from './forms-routing.module';
import {MainModule} from '../main.module'

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MainModule
  ]
})
export class FormsModule { }
