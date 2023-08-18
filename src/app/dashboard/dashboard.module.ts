import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    UsersModule,
    HomeModule,
  ], 
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
