import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainoutletComponent } from './mainoutlet/mainoutlet.component';
import {} from './admin/admin/admin.module'

const routes: Routes = [
  {
    
    path: '', component: MainoutletComponent, children: [
  {
    path: '',
    component: LoginComponent
},

{
  path: 'login',
 component: LoginComponent,
},

]},
{
  path:'admin',
  // loadChildren:'./admin/admin/admin.module#AdminModule',src/app/admin/admin/admin.module.ts
  loadChildren: () => import('./admin/admin/admin.module').then(
    module => module.AdminModule
  )},

{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
