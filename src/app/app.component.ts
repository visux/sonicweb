import { Component, ViewChild } from '@angular/core';

import { IonContent, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

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

  

  @ViewChild(IonContent, { static: false }) content: IonContent;
  
  constructor( private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,) {
       this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    scrollToLabel(label) {
      var titleELe = document.getElementById(label);
      this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
    }
}
