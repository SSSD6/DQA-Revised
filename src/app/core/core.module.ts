import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    TopNavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
