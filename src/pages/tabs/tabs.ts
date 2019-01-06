import { Component } from '@angular/core';

import { ServicesPage } from '../services/services';
import { MyProjectsPage } from '../my_projects/my_projects';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ServicesPage;
  tab2Root = MyProjectsPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
