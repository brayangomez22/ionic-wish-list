import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @ViewChild(IonList) list: IonList;
  @Input() finished = true;

  constructor(
    public wishesService: WishesService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  listSelected(list: List) {
    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }

  async editList(list: List) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: `${list.title}`,
          placeholder: 'List name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
          },
        },
        {
          text: 'Edit',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title;
            this.wishesService.saveStorage();
            this.list.closeSlidingItems();
          },
        },
      ],
    });

    alert.present();
  }
}
