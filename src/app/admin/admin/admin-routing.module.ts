import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

  {
    
    path: '', component: AdminComponent, children: [
  {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  loadChildren: () => import('../dashboard/dashboard.module').then(
    module => module.DashboardModule
  // canActivate: [AuthGuard]
  )},

  {
    path: 'component',
    loadChildren: () => import('../forms/forms.module').then(
      module => module.FormsModule
    // canActivate: [AuthGuard]
    )},

    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
