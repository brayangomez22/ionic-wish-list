import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public wishesService: WishesService,
    private router: Router,
    public alertController: AlertController
  ) {}

  async addList() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          },
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }

            const listId = this.wishesService.createList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          },
        },
      ],
    });

    alert.present();
  }
}
