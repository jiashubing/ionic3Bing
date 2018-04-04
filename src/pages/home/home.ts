import {Component} from '@angular/core';
import {ThemeableBrowser, ThemeableBrowserOptions} from "@ionic-native/themeable-browser";
import {Events, NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private events: Events,
              private nav: NavController,
              private themeableBrowser: ThemeableBrowser) {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.run();
    }, 1000);
  }

  f() {
    this.run();
  }

  run() {
    let options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#ffffff'
      },
      toolbar: {
        height: 0,
        color: '#4876FF'
      },
      title: {
        color: '#ffffff',
        showPageTitle: false
      }
    };
    this.themeableBrowser.create("https://jiashubing.cn", '_blank', options);
  }


}
