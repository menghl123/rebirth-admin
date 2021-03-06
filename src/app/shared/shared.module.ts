import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RebirthChartModule } from 'rebirth-chart';
import { PageFooterComponent } from './page-footer';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RebirthNGModule } from 'rebirth-ng';
import { RebirthPermissionModule } from 'rebirth-permission';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RebirthNGModule,
    RebirthPermissionModule,
    RebirthChartModule
  ],
  declarations: [
    PageFooterComponent,
    PageHeaderComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RebirthNGModule,
    RebirthPermissionModule,
    RebirthChartModule,
    PageFooterComponent,
    PageHeaderComponent
  ]
})
export class SharedModule {

}
