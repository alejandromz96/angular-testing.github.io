import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageAngular } from './page-angular.component';

@NgModule({
  declarations: [
    PageAngular,
  ],
  imports: [
    IonicPageModule.forChild(PageAngular),
  ],
})
export class PageAngularModule {}
