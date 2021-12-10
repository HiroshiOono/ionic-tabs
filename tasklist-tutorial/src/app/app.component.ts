import { Component, OnInit, OnDestroy} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',//表示するhtmlの指定
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{ //これをapp.modele.tsで呼び出している

  ngOnInit(){}
  ngOnDestroy(){}
  
  //メニューバーに出てくるもの
  public appPages = [
    {
      title: 'タスク登録',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'タスク一覧',
      url: '/tasks',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
