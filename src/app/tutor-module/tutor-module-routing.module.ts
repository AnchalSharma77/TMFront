import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorModuleComponent } from './tutor-module.component';

import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { FeeComponent } from './fee/fee.component';
import { PayComponent } from './pay/pay.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { TutorPanelComponent } from './tutor-panel/tutor-panel.component';
import { UploadnotesComponent } from './uploadnotes/uploadnotes.component';
import { AuthguardGuard } from '../gaurds/authguard.guard';
import { ClassComponent } from './class/class.component';


const routes: Routes = [
 // { path: '', component: TutorModuleComponent },
  // {path: '', redirectTo: '/tutor/tutorPanel',pathMatch: 'full'},
  //{ path: 'login', component: TutorLoginComponent },
  
  { path: 'tutorPanel', component: TutorPanelComponent , canActivate:[AuthguardGuard],
      children: [
        { path: 'dashboard', component: TutorDashboardComponent },
        { path: 'registerStudent', component: StudentRegistrationComponent },
        { path: 'removeStudent', component: RemoveStudentComponent },
        { path: 'pay', component: PayComponent },
        { path: 'markAttendance', component: MarkAttendanceComponent },
        { path: 'setFee', component: FeeComponent },
        { path: 'uploadNotes', component: UploadnotesComponent },
        { path: 'class', component: ClassComponent },
        { path: '**', component: TutorDashboardComponent},
      ],
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorModuleRoutingModule { }
export const TutorRoutingComponents=[StudentRegistrationComponent,TutorPanelComponent,PayComponent, RemoveStudentComponent, TutorDashboardComponent,MarkAttendanceComponent, FeeComponent,UploadnotesComponent,ClassComponent, ]