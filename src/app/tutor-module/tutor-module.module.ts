import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorModuleRoutingModule, TutorRoutingComponents } from './tutor-module-routing.module';
import { TutorModuleComponent } from './tutor-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TutorModuleComponent,
    TutorRoutingComponents,
  ],
  imports: [
    CommonModule,
    TutorModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TutorModuleModule { }
