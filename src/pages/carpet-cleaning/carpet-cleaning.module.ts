import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarpetCleaningPage } from './carpet-cleaning';

@NgModule({
  declarations: [
    CarpetCleaningPage,
  ],
  imports: [
    IonicPageModule.forChild(CarpetCleaningPage),
  ],
})
export class CarpetCleaningPageModule {}
