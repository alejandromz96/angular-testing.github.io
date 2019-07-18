import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageJasmine } from './page-jasmine.component';

@NgModule({
  declarations: [
    PageJasmine,
  ],
  imports: [
    IonicPageModule.forChild(PageJasmine),
  ],
})
export class PageJasmineModule {}
