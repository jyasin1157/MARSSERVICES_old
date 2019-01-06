import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	url: string;


  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser, private callNumber: CallNumber) {
    //this.browser = inAppBrowser;
  }
	// openWebpage(url: string){
  //below works with no openWebpage
   //const browser = this.iab.create('http://marsservices.com/contact-us', '_self');
   // const options: InAppBrowserOptions = {
   // zoom: 'no'
   // }
   //  url = 'http://marsservices.com/contact-us';
   //  this.iab.create(url, '_self', {location:'no'});

   openWebpage(){
     this.inAppBrowser.create("http://marsservices.com/contact-us", "_self");

   }

   openfacebook(){
     this.inAppBrowser.create("https://www.facebook.com/marsservices", "_self");
   }
   opentwitter(){
     this.inAppBrowser.create("https://www.twitter.com/MarsDFW", "_self");
   }
   openinstagram(){
     this.inAppBrowser.create("https://www.instagram.com/marsservices", "_self");
   }
   openyelp(){
     this.inAppBrowser.create("https://www.yelp.com/biz/mars-services-haltom-city-2", "_self");
   }

   todo = {
     title: ''
   };

   opendialer(phoneNumber){
     this.callNumber.callNumber('8173864084', true);
      // .then(res=> console.log('Launched dialer!', res))
      // .catch(err=> console.log('Error launching dialer!', err));
  }
   // openWebpage(url: string) {
   //  const options: InAppBrowserOptions = {
   //    zoom: 'no'
   //  }
   //
   //  // Opening a URL and returning an InAppBrowserObject
   //  const browser = this.inAppBrowser.create(url, '_self', options);
   //  browser.show();
   //
   //  browser.close();

   // Inject scripts, css and more with browser.X
  //}
  // launch(url){
  //   // this.browser.ready().then(() => {
      //const browser = this.inAppBrowser.create(url, "_self");
  //   };
  // }

  //}
}
