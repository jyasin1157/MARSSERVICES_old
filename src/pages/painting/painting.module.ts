import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaintingPage } from './painting';

@NgModule({
  declarations: [
    PaintingPage,
  ],
  imports: [
    IonicPageModule.forChild(PaintingPage),
  ],
})
export class PaintingPageModule {}
