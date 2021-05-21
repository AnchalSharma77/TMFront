import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



export const routes: Routes = [
  {path: '', redirectTo: '/tm/home',pathMatch: 'full'},
  {path: 'tm', redirectTo: '/tm/home',pathMatch:'full'},
  { path: 'student', loadChildren: () => import('./student-module/student-module.module').then(m => m.StudentModuleModule) },
  { path: 'tutor', loadChildren: () => import('./tutor-module/tutor-module.module').then(m => m.TutorModuleModule) },
  { path: 'tm', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) },
  {path:'**',component:PagenotfoundComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ PagenotfoundComponent]
