import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HilfePage } from './hilfe';

@NgModule({
  declarations: [
    HilfePage,
  ],
  imports: [
    IonicPageModule.forChild(HilfePage),
  ],
})
export class HilfePageModule {}
