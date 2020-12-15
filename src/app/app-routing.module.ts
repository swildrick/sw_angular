import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path: 'about-component', component: WorkComponent },
  { path: 'work-component', component: WorkComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: WorkComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
