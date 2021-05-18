import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule, mainRoutingComponents } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainModuleComponent,
     mainRoutingComponents,
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MainModuleModule { }
