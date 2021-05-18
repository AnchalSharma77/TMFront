import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule, studentRoutingComponents } from './student-module-routing.module';
import { StudentModuleComponent } from './student-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations:
   [StudentModuleComponent,
    studentRoutingComponents,
     ],
  imports: [
    CommonModule,
    StudentModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  
})
export class StudentModuleModule { }
