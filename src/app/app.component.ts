import { Component } from '@angular/core';
import { PromoService } from './services/promo.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { PromoInfo } from "./models/promo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  random: string;
  output: number;
 
  constructor(private promo: PromoService) {}

  ngOnInit() {
    if (localStorage.getItem('promoCode')) {
      this.random = JSON.stringify(localStorage.promoCode)
      document.getElementById('btn').style.display = 'none';
    }

    this.promo.getListPromo().subscribe(users => {
      if (users.length >= 10) {
        alert("No promo code more");
        this.getPromo = null;
      } else {
         this.output = users.length;
         const limit = 10;
         this.output = limit - this.output; 
      }
    });  
  };

  getPromo() {
    if (this.output = 0) {
      alert("No promo code more");
    } else {
       this.random = this.promo.randomString(15);
       localStorage.setItem('promoCode', this.random);
       this.promo.sendPromo(this.random);
       document.getElementById('btn').style.display = 'none';
    }
  };

}


