import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Lists: List[] = [];

  constructor() {
    console.log('initialized service');
  }
}
