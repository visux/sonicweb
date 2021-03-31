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
      title: 'GET APP',
      url: '',
      icon: 'play'
    },
    {
      title: 'About',
      url: '/login',
      icon: 'information'
    },
    {
      title: 'Roadmap',
      url: '/register',
      icon: 'map'
    },
    {
      title: 'Contacts',
      url: '',
      icon: 'people'
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
