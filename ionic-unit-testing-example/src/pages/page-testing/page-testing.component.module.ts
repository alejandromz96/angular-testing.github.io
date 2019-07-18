import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PageTesting } from './page-testing.component';
import { WarriorComponent } from './components/warrior-component/warrior-component';

@NgModule({
  declarations: [
    PageTesting,
    WarriorComponent,
  ],
  imports: [
    IonicPageModule.forChild(PageTesting),
  ],
})
export class PageTestingModule { }
