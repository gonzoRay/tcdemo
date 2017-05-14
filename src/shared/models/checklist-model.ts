import {Observable} from 'rxjs/Observable';

export class ChecklistModel {

  checklist: any;
  checklistObserver: any;

  constructor(public title: string, public items: any[]) {

    this.items = items;

    this.checklist = Observable.create((observer: any) => {
      this.checklistObserver = observer;
    });

  }

  addItem(item: any): void {

    this.items.push({
      title: item,
      checked: false
    });

    this.checklistObserver.next(true);

  }

  removeItem(item: any): void {

    let index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }

    this.checklistObserver.next(true);

  }

  renameItem(item: any, title: string): void {

    let index = this.items.indexOf(item);

    if (index > -1) {
      this.items[index].title = title;
    }

    this.checklistObserver.next(true);

  }

  setTitle(title: string): void {
    this.title = title;
    this.checklistObserver.next(true);
  }

  toggleItem(item: any): void {
    item.checked = !item.checked;
    this.checklistObserver.next(true);
  }

  checklistUpdates(): Observable<any> {
    return this.checklist;
  }

}
