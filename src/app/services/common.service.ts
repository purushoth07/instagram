import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoading = false;
  private formRefreshAnnouncedSource = new Subject<any>();
  formRefreshSource$ = this.formRefreshAnnouncedSource.asObservable();

  constructor(public toastController: ToastController,  public loadingCtrl: LoadingController) { }
  
  async presentToast(message, color, position) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: position
    });
    toast.present();
  }

  publishFormRefresh(message: any){
    this.formRefreshAnnouncedSource.next(message)
  }

  getObservable(): Subject<any> {
    return this.formRefreshAnnouncedSource;
}

  async Loadingpresent() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 4000,
      backdropDismiss: true
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async LoadingMessage(message) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 4000,
      backdropDismiss: true,
      message:message
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async fullLoader() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 12000,
      backdropDismiss: true
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  async paymentLoader() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      backdropDismiss: false,
      message: 'Waiting For Payment Confirmation',
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async Loadingdismiss() {
    console.log('loading dismiss runned');
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
  


}