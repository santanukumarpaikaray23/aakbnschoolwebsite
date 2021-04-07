import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
// import {PageNotFoundComponent} from './page-not-found/page-not-found.component'; 
// import {CourseDetailComponent} from './courses/course-detail/course-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  //  {path:'**',component:PageNotFoundComponent},
  // {path:'course-details',component:CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
