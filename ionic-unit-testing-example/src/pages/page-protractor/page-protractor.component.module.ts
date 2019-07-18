import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageProtractor } from './page-protractor.component';

@NgModule({
  declarations: [
    PageProtractor,
  ],
  imports: [
    IonicPageModule.forChild(PageProtractor),
  ],
})
export class PageProtractorModule {}
