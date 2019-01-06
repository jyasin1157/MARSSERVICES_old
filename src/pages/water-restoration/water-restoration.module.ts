import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterRestorationPage } from './water-restoration';

@NgModule({
  declarations: [
    WaterRestorationPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterRestorationPage),
  ],
})
export class WaterRestorationPageModule {}
