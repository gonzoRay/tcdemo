import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AsksDataService {

  constructor(public storage: Storage){

  }

  getData(): Promise<any> {
    return this.storage.get('asks');
  }

  save(data): void {

    let saveData = [];

    //Remove observables
    data.forEach((checklist) => {
      saveData.push({
        title: checklist.title,
        items: checklist.items
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('asks', newData);
  }


}
