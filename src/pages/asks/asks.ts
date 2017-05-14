import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-asks',
  templateUrl: 'asks.html'
})
export class AsksPage {
	checklist: any;

	constructor(public nav: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController){
		this.checklist = this.navParams.get('checklist');
	}

	addItem(): void {

	    let prompt = this.alertCtrl.create({
	      title: 'Add Item',
	      message: 'Enter the name of the task for this checklist below:',
	      inputs: [
	        {
	          name: 'name'
	        }
	      ],
	      buttons: [
	        {
	          text: 'Cancel'
	        },
	        {
	          text: 'Save',
	          handler: data => {
		 		       this.checklist.addItem(data.name);
	          }
	        }
	      ]
	    });

	    prompt.present();

	}

	toggleItem(item: any): void {
		this.checklist.toggleItem(item);
	}

	removeItem(item: any): void {
		this.checklist.removeItem(item);
	}

	renameItem(item: any): void {

	    let prompt = this.alertCtrl.create({
	      title: 'Rename Item',
	      message: 'Enter the new name of the task for this checklist below:',
	      inputs: [
	        {
	          name: 'name'
	        }
	      ],
	      buttons: [
	        {
	          text: 'Cancel'
	        },
	        {
	          text: 'Save',
	          handler: data => {
		 		this.checklist.renameItem(item, data.name);
	          }
	        }
	      ]
	    });

	    prompt.present();

	}

	uncheckItems(): void {
		this.checklist.items.forEach((item: any) => {
			if(item.checked){
				this.checklist.toggleItem(item);
			}
		});
	}

}
