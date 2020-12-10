import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseEditComponent } from './license-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LicenseEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseEditRoutingModule { }
