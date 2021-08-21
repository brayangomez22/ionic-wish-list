import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from 'src/app/services/wishes.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: List;
  nameItem = '';

  constructor(
    private wishesService: WishesService,
    private route: ActivatedRoute
  ) {
    const listId = this.route.snapshot.paramMap.get('listId');

    this.list = this.wishesService.getList(listId);
  }

  ngOnInit() {}

  addItem() {
    if (this.nameItem.length === 0) {
      return;
    }

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);

    this.nameItem = '';
    this.wishesService.saveStorage();
  }

  changeCheck(item: ListItem) {
    const slopes = this.list.items.filter(
      (itemData) => !itemData.completed
    ).length;

    if (slopes === 0) {
      this.list.finishedEn = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedEn = null;
      this.list.finished = false;
    }

    this.wishesService.saveStorage();
  }
}
