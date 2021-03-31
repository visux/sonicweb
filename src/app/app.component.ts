import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
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
      title: 'SONIC 777',
      url: '',
      icon: 'albums'
    },
    {
      title: 'About',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'Roadmap',
      url: '/register',
      icon: 'person'
    },
    {
      title: 'Contacts',
      url: '/register',
      icon: 'person'
    }
  ];
  
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
}
