import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventComponent } from './event/event.component';



@NgModule({
  declarations: [
    PageComponent,
    ContactUsComponent,
    EventComponent,
   
  ],
  imports: [
    CommonModule,
    StaticpagesRoutingModule
  ]
})
export class StaticpagesModule { }
