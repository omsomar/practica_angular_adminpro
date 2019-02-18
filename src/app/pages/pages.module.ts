import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent
  ]
})
export class PagesModule { }
