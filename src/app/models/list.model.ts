import { ListItem } from './list-item.model';
export class List {
  id: number;
  title: string;
  createdEn: Date;
  finishedEn: Date;
  finished: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.createdEn = new Date();
    this.finished = false;
    this.items = [];
  }
}
