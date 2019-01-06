import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PestControlPage } from './pest-control';

@NgModule({
  declarations: [
    PestControlPage,
  ],
  imports: [
    IonicPageModule.forChild(PestControlPage),
  ],
})
export class PestControlPageModule {}
