import { Injectable } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { PromoInfo } from "../models/promo.model";

@Injectable()
export class PromoService {
  Promo: FirebaseListObservable<PromoInfo[]>;

  constructor(private db: AngularFireDatabase) {}

  randomString(length): string {
      
    var text = "";

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for(var i = 0; i < length; i++) {
    
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
  
    return text;

  };

  sendPromo(promo: string) {
    this.Promo = this.getListPromo();
    this.Promo.push({
      promo: promo,
    });
  };

  getListPromo(): FirebaseListObservable<PromoInfo[]> {

    return this.db.list('PromoCode', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
  };


}
