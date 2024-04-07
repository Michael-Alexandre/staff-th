import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftnavComponent } from './components/leftnav/leftnav.component';

const routes: Routes = [
  {
    path: '', component: LeftnavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
