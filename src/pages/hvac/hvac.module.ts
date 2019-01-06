import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HvacPage } from './hvac';

@NgModule({
  declarations: [
    HvacPage,
  ],
  imports: [
    IonicPageModule.forChild(HvacPage),
  ],
})
export class HvacPageModule {}
