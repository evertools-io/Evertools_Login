import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseListComponent } from './license-list.component';
import { LicenseListRoutingModule } from './license-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LicenseListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LicenseListComponent
  ]
})
export class LicenseListModule { }
