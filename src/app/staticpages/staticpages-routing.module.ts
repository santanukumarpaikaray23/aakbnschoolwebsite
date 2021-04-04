import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {PageComponent} from './page/page.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { CourseDetailComponent } from '../courses/course-detail/course-detail.component';
import {EventComponent} from './event/event.component';

const routes: Routes = [
{path:'page/:slug',component:PageComponent},
{path:'contact',component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
