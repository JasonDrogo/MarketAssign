import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTocartService {
itemsInCart : Array<any>=[];
  constructor() { }

  private cartItems = new Subject<any[]>();
 // Observable string streams
 cart : Observable<any> = this.cartItems.asObservable();

 addTocart(item) {
   let a = this.itemsInCart.findIndex((product:any)  => product.Name == item.Name && product.company== item.company);
   if(a ==-1){
     this.itemsInCart.push(item);
     this.cartItems.next(this.itemsInCart);
   }
 }


 removeCArt(item) {
  let a = this.itemsInCart.findIndex((product:any)  => product.Name == item.Name && product.company== item.company);
  this.itemsInCart.splice(a,1);
  this.cartItems.next(this.itemsInCart);

 }

 private totalItems = new Subject<any[]>();

 allItems : Observable<any> = this.totalItems.asObservable();

 ItemsinInventory(items : Array<any>){
this.totalItems.next(items);
 }
 
 private totalCompanies = new Subject<any[]>();

 allCompanies : Observable<any> = this.totalCompanies.asObservable();

 belongsToCompanies(companies){
   this.totalCompanies.next(companies);

 }
 private filterKeyword = new Subject<string>();

 searchKey : Observable<any> = this.filterKeyword.asObservable();

 filter(a : string){
this.filterKeyword.next(a);
 }


}
