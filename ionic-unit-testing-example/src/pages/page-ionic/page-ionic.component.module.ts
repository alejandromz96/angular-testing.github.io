import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageIonic } from './page-ionic.component';

@NgModule({
  declarations: [
    PageIonic,
  ],
  imports: [
    IonicPageModule.forChild(PageIonic),
  ],
})
export class PageIonicModule {}
