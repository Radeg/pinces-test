import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {HomeTab} from './pages/tabs/home-tab';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Chat } from './pages/chat/chat';
import { Dating } from './pages/dating/dating';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeTab;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomeTab },
      { icon: 'contact', title: 'Profile', component: Profile },
      { icon: 'chatbubbles', title: 'Chat', component: Chat },
      { icon: 'heart', title: 'Dating', component: Dating }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
