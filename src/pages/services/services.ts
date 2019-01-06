import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CarpetCleaningPage } from '../carpet-cleaning/carpet-cleaning';
import { HousekeepingPage } from '../housekeeping/housekeeping';
import { PlumbingPage } from '../plumbing/plumbing';
import { ElectricalPage } from '../electrical/electrical';
import { HvacPage } from '../hvac/hvac';
import { PestControlPage } from '../pest-control/pest-control';
import { PaintingPage } from '../painting/painting';
import { ResurfacingPage } from '../resurfacing/resurfacing';
import { AirDryerDuctCleaningPage } from '../air-dryer-duct-cleaning/air-dryer-duct-cleaning';
import { TileGroutPage } from '../tile-grout/tile-grout';
import { TraumaSceneCleanUpPage } from '../trauma-scene-clean-up/trauma-scene-clean-up';
import { WaterRestorationPage } from '../water-restoration/water-restoration';
import { MaintenanceMakeReadyPage } from '../maintenance-make-ready/maintenance-make-ready';

import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  constructor(public navCtrl: NavController, public statusBar: StatusBar) {

  }
  itemSelected(item: string) {
   console.log("Selected Item", item);
  }
   load_carpetcleaning() {
   this.navCtrl.push(CarpetCleaningPage, {
   })
   }
   load_housekeeping() {
   this.navCtrl.push(HousekeepingPage, {
    // val: 'Yasin'
   })
   }
   load_plumbing() {
   this.navCtrl.push(PlumbingPage, {
   })
   }
   load_electrical() {
   this.navCtrl.push(ElectricalPage, {
   })
   }
   load_hvac() {
   this.navCtrl.push(HvacPage, {
   })
   }
   load_pestcontrol() {
   this.navCtrl.push(PestControlPage, {
   })
   }
   load_painting() {
   this.navCtrl.push(PaintingPage, {
   })
   }
   load_resurfacing() {
   this.navCtrl.push(ResurfacingPage, {
   })
   }
   load_airdryerductcleaning() {
   this.navCtrl.push(AirDryerDuctCleaningPage, {
   })
   }
   load_tilegrout() {
   this.navCtrl.push(TileGroutPage, {
   })
   }
   load_traumascenecleanup() {
   this.navCtrl.push(TraumaSceneCleanUpPage, {
   })
   }
   load_waterrestoration() {
   this.navCtrl.push(WaterRestorationPage, {
   })
   }
   load_maintenancemakeready() {
   this.navCtrl.push(MaintenanceMakeReadyPage, {
   })
   }
}
