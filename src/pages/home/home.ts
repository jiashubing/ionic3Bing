import {Component} from '@angular/core';
import {ThemeableBrowser, ThemeableBrowserOptions} from "@ionic-native/themeable-browser";
import {LoadingController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading:any;

  constructor(private loadingCtrl: LoadingController,
              private themeableBrowser: ThemeableBrowser) {
  }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      content: '加载中...'
    });
    this.loading.present();
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.run();
      this.loading.dismiss();
    }, 2000);
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
