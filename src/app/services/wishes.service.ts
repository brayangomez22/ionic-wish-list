import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  lists: List[] = [];

  constructor() {
    const list1 = new List('Recolectar piedras del infinito');
    const list2 = new List('Héroes a desaparecer');

    this.lists.push(list1, list2);
  }

  createList(title: string) {
    const newList = new List(title);

    this.lists.push(newList);
  }
}
