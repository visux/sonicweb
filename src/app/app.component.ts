import { Component, ViewChild } from '@angular/core';
import {  Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'Dashboard';

  Pages = [
    {
      title: 'SONIC(K) 777',
      url: 'sonic',
      icon: 'albums'
    },
    {
      title: 'GET APP',
      url: 'getapp',
      icon: 'play'
    },
    {
      title: 'About',
      url: 'about',
      icon: 'information'
    },
    {
      title: 'Roadmap',
      url: 'roadmap',
      icon: 'map'
    },
    {
      title: 'Contacts',
      url: 'contacts',
      icon: 'people'
    }
  ];


  @ViewChild(IonContent, {read: IonContent}) content: IonContent;
  constructor( private platform: Platform,
               private statusBar: StatusBar,
               private splashScreen: SplashScreen) {
       this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    scrollToLabel(label) {
      const titleELe = document.getElementById(label);
      this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
    }

    openLink(){
      // tslint:disable-next-line:max-line-length
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSeUwCIqVpt6xY_hEDnKVJ9ki0S7_Xdlu8H9AlGIq42-1ZM0cA/viewform?usp=pp_url', '_self');
    }

    openLinkContract(){
      window.open('https://etherscan.io/token/0xce659de292ad4fa9aafd82b038936cebd9291e77', '_self');
    }

    openLinkTelegram(){
      window.open('https://t.me/sonikchain', '_self');
    }

    openLinkWhitepaperIT(){
      window.open('https://www.sonikchain.com/assets/pdf/SonicWhitePaperIT.pdf', '_self');
    }

    openLinkWhitepaperEN(){
      window.open('https://www.sonikchain.com/assets/pdf/SonicWhitePaperIT.pdf', '_self');
    }

    openLinkDex(){
      window.open('https://swap.sonikchain.com', '_self');
    }

    scrollToTop() {
      this.content.scrollToTop();
    }
}


