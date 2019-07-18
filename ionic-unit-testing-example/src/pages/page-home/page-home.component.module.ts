import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageHome } from './page-home.component';

@NgModule({
  declarations: [
    PageHome,
  ],
  imports: [
    IonicPageModule.forChild(PageHome),
  ],
})
export class PageHomeModule {}
