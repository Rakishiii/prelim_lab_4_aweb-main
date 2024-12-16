import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './admin/home/home.component';
import { UserComponent } from './admin/user/user.component';
import { PostComponent } from './admin/post/post.component';
import { ServicesComponent } from './admin/services/services.component';
import { PagenotfoundComponent } from './admin/pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './admin/employee/employee.component';

export const routes: Routes = [
    {path : 'user', component : UserComponent},
    {path : 'employee', component : EmployeeComponent},
    {path : 'post', component : PostComponent},
    {path : '', component : HomeComponent},
    {path : 'services', component : ServicesComponent},
    {path : 'pagenotfound', component : PagenotfoundComponent},
    { path: '**', component: PagenotfoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  
  

