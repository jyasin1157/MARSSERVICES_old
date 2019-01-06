import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectricalPage } from './electrical';

@NgModule({
  declarations: [
    ElectricalPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectricalPage),
  ],
})
export class ElectricalPageModule {}
