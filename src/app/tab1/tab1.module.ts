import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {

  public intervalo;

  constructor(
    private backgroundMode: BackgroundMode,
    public toastController: ToastController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private vibration: Vibration

  ) {

    this.inicio();
    console.log("construtor");

  }

  ngOnInit() {
    this.inicio();
    console.log("ngOnInit");
  }


  public inicio() {

    console.log("inicio");

    this.backgroundMode.enable();    
    this.backgroundMode.on('activate').subscribe(() => {
      console.log("background");
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      array.forEach(element => {
        console.log(element);
      });
      //this.vibration.vibrate([1000, 1000]);
    });
  }

  async presentToast(a) {
    const toast = await this.toastController.create({
      message: 'Eitcha --- ' + a,
      duration: 2000
    });
    toast.present();
  }

}
