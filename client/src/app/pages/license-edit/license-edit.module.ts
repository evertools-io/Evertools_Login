import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseEditComponent } from './license-edit.component';
import { LicenseEditRoutingModule } from './license-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LicenseEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LicenseEditComponent
  ]
})
export class LicenseEditModule { }
