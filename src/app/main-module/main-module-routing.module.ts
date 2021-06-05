import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { TutorloginComponent } from './tutorlogin/tutorlogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TutorlistComponent } from './tutorlist/tutorlist.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo: '/tm',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'tutorLogin', component: TutorloginComponent },
  { path: 'tutorRegistration', component: TutorRegistrationComponent },
  { path: 'tutorList', component: TutorlistComponent },
  { path: 'stuLogin', component: StudentLoginComponent },
  { path: 'forgotPass', component: ForgotpasswordComponent },
  { path: 'resetPass', component: ResetPasswordComponent },
  // { path: 'chat', component: ChatComponent },editdesc
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
export const mainRoutingComponents=[HomeComponent, TutorRegistrationComponent,TutorloginComponent,StudentLoginComponent,ForgotpasswordComponent, ResetPasswordComponent,TutorlistComponent,ChatComponent,]
