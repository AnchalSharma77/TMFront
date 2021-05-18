import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StuAuthguardGuard } from '../gaurds/stu-authguard.guard';
import { NotesComponent } from './notes/notes.component';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
  {path: '/student', redirectTo: '/student/studentPanel',pathMatch: 'full'},
  { path: 'studentPanel', component: StudentPanelComponent ,canActivate:[StuAuthguardGuard],
    children: [
      { path: 'studentDash', component: StudentDashboardComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'class', component: ClassComponent },
      {path: '**', component: StudentDashboardComponent}, 
    ],
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentModuleRoutingModule { }
export const studentRoutingComponents=[StudentPanelComponent,StudentDashboardComponent,NotesComponent,ClassComponent,]