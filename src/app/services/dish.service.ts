import { Injectable } from '@angular/core';
import { Observable, Subscriber } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  favouriteDish: string = '';
  observable: Observable<string>;
  subscriber: Subscriber<string> = new Subscriber();

  constructor() {
    this.observable = new Observable<string>(
      sub => this.subscriber = sub
    )
  }

  // getFavouriteDish(): string {
  //   return this.favouriteDish;
  // }

  getFavouriteDish(): Observable<string> {
    return this.observable;
  }

  setFavouriteDish(dish: string)  {
    this.favouriteDish = dish;
    this.subscriber.next(this.favouriteDish);
  }
}
